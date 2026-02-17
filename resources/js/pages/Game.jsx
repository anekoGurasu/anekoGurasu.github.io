import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { OrbitProgress } from "react-loading-indicators";
import { useStateContext } from "../contexts/ContextProvider";
import axios from 'axios';
import "../../css/app.css";
import "../../css/game.css";

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
  const [loadingQuestions, setLoadingQuestions] = useState(false);

  // Stav pro sledování přečtených bodů v aktuální kategorii
  const [readItems, setReadItems] = useState([]);

  // --- Kontrola obtížnosti ---
  useEffect(() => {
    if (difficulty === null || difficulty === undefined) {
      navigate("/");
    }
  }, [difficulty, navigate]);

  // --- Načtení kategorií ---
  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Chyba při načítání kategorií:", err));
  }, []);

  // Reset přečtených bodů při změně kategorie
  useEffect(() => {
    setReadItems([]);
  }, [catIndex]);

  if (difficulty === null || difficulty === undefined) return null;

  const extractParagraphs = (html) => {
    if (!html) return [];
    const doc = new DOMParser().parseFromString(html, "text/html");
    return Array.from(doc.querySelectorAll("p"))
      .map(p => p.innerHTML.trim())
      .filter(Boolean);
  };

  const toggleRead = (index) => {
    if (readItems.includes(index)) {
      setReadItems(readItems.filter(i => i !== index));
    } else {
      setReadItems([...readItems, index]);
    }
  };

  const category = categories[catIndex];
  const question = questions[qIndex];

  // --- START KATEGORIE (Načtení otázek z API) ---
  const startCategory = async () => {
    if (!category) return;
    
    setLoadingQuestions(true); // Zapne loading kolečko
    
    try {
      const res = await fetch(`/api/questions?category_id=${category.id}&difficulty=${difficulty}`);
      
      if (!res.ok) {
        throw new Error("Nepodařilo se spojit se serverem");
      }

      const data = await res.json();
      
      if (data && data.length > 0) {
        setQuestions(data);
        setQIndex(0);
        setStep("question");
      } else {
        alert("Pro tuto kategorii a obtížnost nebyly nalezeny žádné otázky.");
        // Pokud nejsou otázky, zůstaneme na intru, ale vypneme loading
      }
    } catch (err) {
      console.error("Chyba při načítání otázek:", err);
      alert("Došlo k chybě při načítání otázek. Zkontroluj konzoli.");
    } finally {
      // Tato část se spustí VŽDY (při úspěchu i chybě)
      // Tím se vyřeší problém s nekonečným načítáním
      setLoadingQuestions(false);
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

  const saveScore = () => {
    if (!user || !user.name) return;
    setSaving(true);
    axios.post("/api/dashboard/save", {
      username: user.name,
      points: score,
      difficulty: difficulty
    })
      .then(() => setSaving(false))
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

  // --- LOADING OBRAZOVKA ---
  if (saving || loadingQuestions) {
    return (
      <div className="loading">
        <OrbitProgress color="#3E885B" variant="track-disc" speedPlus="0" easing="ease-in-out" />
      </div>
    );
  }

  // --- KROK 1: INTRO (Edukativní body) ---
  if (step === "intro" && category) {
    const itemsParagraphs = extractParagraphs(category.items || "");
    const allRead = readItems.length === itemsParagraphs.length && itemsParagraphs.length > 0;

    return (
      <div className="intro-shell">
        <div className="intro-grid">
          <div className="intro-cards">
            {itemsParagraphs.length === 0 ? (
              <div className="tip-card cust-box">
                <div className="tip-badge">i</div>
                <p className="tip-text">V této kategorii zatím nejsou žádné výukové body.</p>
              </div>
            ) : (
              itemsParagraphs.map((html, i) => {
                const isRead = readItems.includes(i);
                const doc = new DOMParser().parseFromString(html, "text/html");
                const strong = doc.querySelector("strong");
                const title = strong ? strong.innerText : `Bod ${i + 1}`;
                if (strong) strong.remove();
                const content = doc.body.innerHTML.replace(/^<br\s*\/?>/, "").trim();

                return (
                  <div 
                    className={`tip-card cust-box ${isRead ? 'item-read' : ''}`} 
                    key={i}
                    onClick={() => toggleRead(i)}
                  >
                    <div className="tip-content">
                      <div className="tip-header">
                        <div className={`tip-badge ${isRead ? 'badge-success' : ''}`}>
                          {isRead ? '✓' : i + 1}
                        </div>
                        <h3 className="tip-title">{title}</h3>
                      </div>
                      <p className="tip-text" dangerouslySetInnerHTML={{ __html: content }} />

                      {/* Podmínka !isRead zmizela, třída se mění dynamicky */}
                      <span className={`read-more-hint ${isRead ? 'is-hidden' : ''}`}>
                          Kliknutím potvrď přečtení
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="intro-center">
            <div className="intro-center-card cust-box">
              <h1 className="intro-title">{category.title}</h1>
              <div className="intro-desc" dangerouslySetInnerHTML={{ __html: category.desc }} />
              <div className="intro-actions">
                <button 
                  className="btn-primary" 
                  onClick={startCategory}
                  disabled={!allRead && itemsParagraphs.length > 0}
                >
                  {allRead || itemsParagraphs.length === 0 ? "Pokračovat k otázkám" : `Prostuduj si body (${readItems.length}/${itemsParagraphs.length})`}
                </button>
              </div>
            </div>

            {category.img && (
              <div className="intro-image-box cust-box">
                <img src={category.img} alt={category.title} className="category-presentation-img" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- KROK 2: OTÁZKY (Kvíz) ---
  if (step === "question" && question) {
    return (
      <div className="game-question cust-box">
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

  // --- KROK 3: KONEC ---
  if (step === "gameEnd") {
    return (
      <div className="game-end cust-box">
        <h1>Konec hry</h1>
        <p>Celkové skóre: {score}</p>
        <div className="button-group" style={{marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <button className="btn-primary" onClick={() => navigate("/")}>Domů</button>
          <button className="btn-secondary" onClick={() => navigate("/dashboard")}>Výsledky</button>
        </div>
      </div>
    );
  }

  return null;
}