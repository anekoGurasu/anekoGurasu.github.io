import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import { useStateContext } from "../contexts/ContextProvider";
import "../resources/css/app.css";
import "../resources/css/game.css";

export default function Game() {
  const { difficulty, user } = useStateContext();
  const navigate = useNavigate();

  const [step, setStep] = useState("intro");
  const [categories, setCategories] = useState([]);
  const [catIndex, setCatIndex] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const [score, setScore] = useState(0);
  const [saving, setSaving] = useState(false);

  // --- Initialize CSRF token ---
  useEffect(() => {
    // Make a request to Laravel to initialize the session and get CSRF token
    // This sets the XSRF-TOKEN cookie which we can use for subsequent requests
    fetch("/api/categories", {
      credentials: "include"
    }).catch(console.error);
  }, []);

  // --- Fetch categories
  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.text())
      .then(text => {
        const start = text.indexOf("[");
        if (start === -1) throw new Error("No JSON array in response");
        const json = JSON.parse(text.slice(start));
        setCategories(json);
      })
      .catch(console.error);
  }, []);

  if (difficulty === null || difficulty === undefined) {
    return <Navigate to="/" />;
  }

  const extractParagraphs = (html) => {
    if (!html) return [];
    const doc = new DOMParser().parseFromString(html, "text/html");
    return Array.from(doc.querySelectorAll("p"))
      .map(p => p.innerHTML.trim())
      .filter(Boolean);
  };

  const category = categories[catIndex];
  const question = questions[qIndex];

  // --- Category / Question handling ---
  const startCategory = async () => {
    const res = await fetch(`/api/questions?category_id=${category.id}&difficulty=${difficulty}`);
    const text = await res.text();
    const start = text.indexOf("[");
    if (start === -1) {
      console.error("Questions response is not JSON:", text);
      return;
    }
    const data = JSON.parse(text.slice(start));
    setQuestions(data);
    setQIndex(0);
    setStep("question");
  };

  const pickAnswer = (answer) => {
    if (revealed) return;
    setSelectedAnswer(answer.id);
  };

  const confirmAnswer = () => {
    if (revealed || selectedAnswer == null) return;

    const chosen = question.answers.find(a => a.id === selectedAnswer);
    if (!chosen) return;

    setRevealed(true);
    setScore(s => s + (chosen.points || 0));
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setRevealed(false);
    if (qIndex + 1 < questions.length) {
      setQIndex(i => i + 1);
    } else {
      nextCategory();
    }
  };

  const nextCategory = () => {
    if (catIndex + 1 < categories.length) {
      setCatIndex(i => i + 1);
      setStep("intro");
    } else {
      setStep("gameEnd");
    }
  };

  // --- Get CSRF token from cookie ---
  const getCsrfToken = () => {
    const name = 'XSRF-TOKEN=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  };

  // --- Save score function ---
  const saveScore = async () => {
  if (!user || !user.name) return;

  try {
    const csrfToken = getCsrfToken();
    
    const headers = {
      "Content-Type": "application/json",
    };
    
    // Add CSRF token if available
    if (csrfToken) {
      headers["X-XSRF-TOKEN"] = csrfToken;
    }

    const response = await fetch("/api/dashboard/save", {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify({
        username: user.name,
        points: score,
        difficulty: difficulty
      }),
    });

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      console.log("Skóre uloženo!", data.data);
    } else {
      console.error("Chyba při ukládání skóre", data.error);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  // --- Save score při gameEnd ---
  useEffect(() => {
    if (step === "gameEnd") {
      const saveAndFinish = async () => {
        setSaving(true);
        await saveScore();
        setSaving(false);
      };
      saveAndFinish();
    }
  }, [step]);

  // --- RENDER ---

  // INTRO
  if (step === "intro" && category) {
    const itemsParagraphs = extractParagraphs(category.items || "");
    return (
      <div className="intro-shell">
        <div className="intro-grid">
          <div className="intro-cards">
            {itemsParagraphs.length === 0 ? (
              <div className="tip-card">
                <div className="tip-badge">i</div>
                <p className="tip-text">
                  V této kategorii zatím nejsou žádné výukové body.
                </p>
              </div>
            ) : (
              itemsParagraphs.map((html, i) => {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const strong = doc.querySelector("strong");
                const title = strong ? strong.innerText : `Bod ${i + 1}`;
                if (strong) strong.remove();
                const content = doc.body.innerHTML.replace(/^<br\s*\/?>/, "").trim();
                return (
                  <div className="tip-card cust-box" key={i}>
                    <div className="tip-content">
                      <div className="tip-header">
                        <div className="tip-badge">{i + 1}</div>
                        <h3 className="tip-title">{title}</h3>
                      </div>
                      <p className="tip-text" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="intro-center">
            <div className="intro-center-card">
              <h1 className="intro-title">{category.title}</h1>
              <div className="intro-desc" dangerouslySetInnerHTML={{ __html: category.desc }} />
              <div className="intro-actions">
                <button className="btn-primary" onClick={startCategory}>
                  Pokračovat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // QUESTION
  if (step === "question" && question) {
    return (
      <div className="game-question">
        <h2>{question.text}</h2>
        <div className="answers">
          {question.answers.map((a, i) => {
            const letter = String.fromCharCode(65 + i);
            let state = "";
            if (revealed) {
              if (a.is_correct) state = "correct";
              else if (a.id === selectedAnswer) state = "wrong";
            }
            return (
              <label key={a.id} className={`answer-option ${state}`}>
                <input
                  type="radio"
                  name="answer"
                  disabled={revealed}
                  checked={selectedAnswer === a.id}
                  onChange={() => pickAnswer(a)}
                />
                <span className="answer-letter">{letter}</span>
                <span className="answer-text">{a.text}</span>
              </label>
            );
          })}
        </div>

        {!revealed ? (
          <button className="btn-primary" onClick={confirmAnswer} disabled={selectedAnswer == null}>
            Potvrdit odpověď
          </button>
        ) : (
          <button className="btn-primary" onClick={nextQuestion}>
            Další otázka
          </button>
        )}
      </div>
    );
  }

  // GAME END
  if (step === "gameEnd") {
    if (saving) return <div className="save-loading">Ukládám skóre...</div>;

    return (
      <div className="game-end cust-box">
        <h1>Konec hry</h1>
        <p>Celkové skóre: {score}</p>
        <div className="button-group">
          <button className="btn-primary" onClick={() => navigate("/")}>Domů</button>
          <button className="btn-secondary" onClick={() => navigate("/dashboard")}>Výsledky</button>
        </div>
      </div>
    );
  }

  // DEFAULT LOADING
  return (
    <div className="loading">
      <OrbitProgress color="#3E885B" variant="track-disc" speedPlus="0" easing="ease-in-out" />
    </div>
  );
}
