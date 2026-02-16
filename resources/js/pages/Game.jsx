import { useEffect, useState } from "react";
// 1. Změna: Používáme router z Inertie
import { router } from "@inertiajs/react"; 
import { OrbitProgress } from "react-loading-indicators";
import { useStateContext } from "../contexts/ContextProvider";
import axios from 'axios';
import "../../css/app.css";
import "../../css/game.css";

export default function Game() {
  const { difficulty, user } = useStateContext();

  const [step, setStep] = useState("intro");
  const [categories, setCategories] = useState([]);
  const [catIndex, setCatIndex] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const [score, setScore] = useState(0);
  const [saving, setSaving] = useState(false);

  // --- Kontrola obtížnosti (nahrazuje Navigate) ---
  useEffect(() => {
    if (difficulty === null || difficulty === undefined) {
      router.visit("/");
    }
  }, [difficulty]);

  // --- Načtení kategorií ---
  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.json()) // Inertia/Laravel API vrací čisté JSON, nemusíš hledat "["
      .then(data => setCategories(data))
      .catch(console.error);
  }, []);

  if (difficulty === null || difficulty === undefined) return null;

  const extractParagraphs = (html) => {
    if (!html) return [];
    const doc = new DOMParser().parseFromString(html, "text/html");
    return Array.from(doc.querySelectorAll("p"))
      .map(p => p.innerHTML.trim())
      .filter(Boolean);
  };

  const category = categories[catIndex];
  const question = questions[qIndex];

  // --- Start kategorie ---
  const startCategory = async () => {
    try {
        const res = await fetch(`/api/questions?category_id=${category.id}&difficulty=${difficulty}`);
        const data = await res.json();
        setQuestions(data);
        setQIndex(0);
        setStep("question");
    } catch (err) {
        console.error("Chyba při načítání otázek", err);
    }
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

  // --- ULOŽENÍ SKÓRE (Zjednodušeno pomocí router.post) ---
 const saveScore = () => {
    if (!user || !user.name) return;

    setSaving(true);
    // Použijeme axios.post místo router.post
    axios.post("/api/dashboard/save", {
        username: user.name,
        points: score,
        difficulty: difficulty
    })
    .then(response => {
        console.log("Skóre uloženo přes Axios!", response.data);
        setSaving(false);
    })
    .catch(error => {
        console.error("Chyba při ukládání", error);
        setSaving(false);
    });
};

  useEffect(() => {
    if (step === "gameEnd") {
      saveScore();
    }
  }, [step]);

  // --- RENDEROVÁNÍ ---

  if (step === "intro" && category) {
    const itemsParagraphs = extractParagraphs(category.items || "");
    return (
      <div className="intro-shell">
        <div className="intro-grid">
          <div className="intro-cards">
            {itemsParagraphs.length === 0 ? (
              <div className="tip-card">
                <div className="tip-badge">i</div>
                <p className="tip-text">V této kategorii zatím nejsou žádné výukové body.</p>
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
                <button className="btn-primary" onClick={startCategory}>Pokračovat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <button className="btn-primary" onClick={nextQuestion}>Další otázka</button>
        )}
      </div>
    );
  }

  if (step === "gameEnd") {
    if (saving) return <div className="save-loading">Ukládám skóre...</div>;
    return (
      <div className="game-end cust-box">
        <h1>Konec hry</h1>
        <p>Celkové skóre: {score}</p>
        <div className="button-group">
          <button className="btn-primary" onClick={() => router.visit("/")}>Domů</button>
          <button className="btn-secondary" onClick={() => router.visit("/dashboard")}>Výsledky</button>
        </div>
      </div>
    );
  }

  return (
    <div className="loading">
      <OrbitProgress color="#3E885B" variant="track-disc" speedPlus="0" easing="ease-in-out" />
    </div>
  );
}