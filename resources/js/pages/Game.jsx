import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { OrbitProgress } from "react-loading-indicators";
import { useStateContext } from "../contexts/ContextProvider";
import axios from 'axios';
import "../../css/app.css";
import "../../css/game.css";

const shuffleArray = (array) => {
  if (!array || !Array.isArray(array)) return [];
  return [...array].sort(() => Math.random() - 0.5);
};

export default function Game() {
  const { difficulty, user } = useStateContext();
  const navigate = useNavigate();

  const [step, setStep] = useState("intro");
  const [categories, setCategories] = useState([]);
  const [catIndex, setCatIndex] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [revealed, setRevealed] = useState(false);

  const [score, setScore] = useState(0);
  const [saving, setSaving] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [readItems, setReadItems] = useState([]);

  useEffect(() => {
    if (difficulty === null || difficulty === undefined) navigate("/");
  }, [difficulty, navigate]);

  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Chyba při načítání kategorií:", err));
  }, []);

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

  const startCategory = async () => {
    if (!category) return;
    setLoadingQuestions(true);
    try {
      const res = await fetch(`/api/questions?category_id=${category.id}&difficulty=${difficulty}`);
      if (!res.ok) throw new Error("Chyba serveru");
      const data = await res.json();
      if (data && data.length > 0) {
        const shuffled = shuffleArray(data).map(q => ({
          ...q,
          answers: q.answers ? shuffleArray(q.answers) : []
        }));
        setQuestions(shuffled);
        setQIndex(0);
        setStep("question");
      }
    } catch (err) {
      alert("Došlo k chybě při načítání otázek.");
    } finally {
      setLoadingQuestions(false);
    }
  };

  const pickAnswer = (answer) => {
    if (revealed) return;
    if (question.type === 1) {
      if (selectedAnswers.includes(answer.id)) {
        setSelectedAnswers(selectedAnswers.filter(id => id !== answer.id));
      } else {
        setSelectedAnswers([...selectedAnswers, answer.id]);
      }
    } else {
      setSelectedAnswers([answer.id]);
    }
  };

  const confirmAnswer = () => {
    if (revealed || selectedAnswers.length === 0) return;
    let earned = 0;
    if (question.type === 1) {
      question.answers.forEach(a => {
        if (selectedAnswers.includes(a.id) && a.is_correct) earned += (a.points || 0);
      });
    } else {
      const chosen = question.answers.find(a => a.id === selectedAnswers[0]);
      if (chosen && chosen.is_correct) earned = chosen.points || 0;
    }
    setRevealed(true);
    setScore(s => s + earned);
  };

  const nextQuestion = () => {
    setSelectedAnswers([]);
    setRevealed(false);
    if (qIndex + 1 < questions.length) {
      setQIndex(i => i + 1);
    } else {
      if (catIndex + 1 < categories.length) {
        setCatIndex(i => i + 1);
        setStep("intro");
      } else {
        setStep("gameEnd");
      }
    }
  };

  if (saving || loadingQuestions) {
    return (
      <div className="loading">
        <OrbitProgress color="#3E885B" variant="track-disc" speedPlus="0" easing="ease-in-out" />
      </div>
    );
  }

  // --- RENDEROVÁNÍ KROKU OTÁZKY ---
  // --- RENDEROVÁNÍ KROKU OTÁZKY ---
// --- RENDEROVÁNÍ KROKU OTÁZKY ---
if (step === "question" && question) {
  return (
    <div className="game-container"> {/* Obal pro celou sekci */}
      <div className={`game-question cust-box ${question.img ? 'has-image' : 'no-image'}`}>
        <div className={question.img ? "question-layout" : "question-simple"}>
          
          {/* Obrázek a zdroj */}
          {question.img && (
            <div className="question-image-container">
              <div className="question-img-wrapper">
                <img src={question.img} alt="Úkol" className="question-img" />
              </div>
              {question.img_src && (
                <p className="image-source">Zdroj: {question.img_src}</p>
              )}
            </div>
          )}

          <div className="question-content">
            <div className="question-header">
              <h2>{question.text}</h2>
              {question.type === 1 && <span className="multi-hint">Vyberte všechny správné odpovědi</span>}
            </div>
            
            <div className="answers">
              {question.answers.map((a, i) => {
                const letter = String.fromCharCode(65 + i);
                const isSelected = selectedAnswers.includes(a.id);
                
                let state = "";
                if (revealed) {
                  if (a.is_correct) {
                    state = (question.type === 1 && !isSelected) ? "missed" : "correct";
                  } else if (isSelected) {
                    state = "wrong";
                  }
                }

                return (
                  <label key={a.id} className={`answer-option ${state} ${isSelected ? 'selected' : ''}`}>
                    <input
                      type={question.type === 1 ? "checkbox" : "radio"}
                      name="answer"
                      disabled={revealed}
                      checked={isSelected}
                      onChange={() => pickAnswer(a)}
                    />
                    <span className="answer-letter">{letter}</span>
                    <span className="answer-text">{a.text}</span>
                  </label>
                );
              })}
            </div>
            
            <button className="btn-primary" onClick={revealed ? nextQuestion : confirmAnswer} disabled={selectedAnswers.length === 0}>
              {revealed ? "Další otázka" : "Potvrdit odpověď"}
            </button>
          </div>
        </div>
      </div>

      {/* --- BOX PRO VYSVĚTLENÍ POD CELÝM BOXEM --- */}
      {revealed && (
        <div className="explanations-outer">
          {question.answers
            .filter(a => (selectedAnswers.includes(a.id) || (question.type === 1 && a.is_correct && !selectedAnswers.includes(a.id))) && a.explanation)
            .map(a => (
              <div key={`exp-${a.id}`} className={`explanation-box ${a.is_correct ? 'is-missed-exp' : 'is-wrong-exp'}`}>
                <div className="explanation-icon">{a.is_correct ? "?" : "!"}</div>
                <div className="explanation-content">
                  <strong>{a.is_correct ? `Proč byla správně: „${a.text}“` : `Proč je špatně: „${a.text}“`}</strong>
                  <p>{a.explanation}</p>
                </div>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}

  // --- OSTATNÍ KROKY (INTRO / KONEC) ---
  // --- KROK 1: INTRO (Edukativní body) ---
if (step === "intro" && category) {
  const itemsParagraphs = extractParagraphs(category.items || "");
  const allRead = readItems.length === itemsParagraphs.length && itemsParagraphs.length > 0;

  return (
    <div className="intro-shell">
      <div className="intro-grid">
        <div className="intro-cards">
          {itemsParagraphs.map((html, i) => (
            <div 
              className={`tip-card cust-box ${readItems.includes(i) ? 'item-read' : ''}`} 
              key={i} 
              onClick={() => toggleRead(i)}
            >
              <div className="tip-content">
                <div className="tip-header">
                  <div className={`tip-badge ${readItems.includes(i) ? 'badge-success' : ''}`}>
                    {readItems.includes(i) ? '✓' : i + 1}
                  </div>
                  <h3 className="tip-title">Bod {i + 1}</h3>
                </div>
                <p className="tip-text" dangerouslySetInnerHTML={{ __html: html }} />
                <span className={`read-more-hint ${readItems.includes(i) ? 'is-hidden' : ''}`}>
                  Kliknutím potvrď přečtení
                </span>
              </div>
            </div>
          ))}
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

          {/* TADY JE TEN OBRÁZEK INTRA */}
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

  if (step === "gameEnd") {
    return (
      <div className="game-end cust-box">
        <h1>Konec hry</h1>
        <p>Celkové skóre: {score}</p>
        <button className="btn-primary" onClick={() => navigate("/")}>Domů</button>
      </div>
    );
  }

  return null;
}