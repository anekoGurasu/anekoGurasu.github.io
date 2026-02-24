import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { OrbitProgress } from "react-loading-indicators";
import { useStateContext } from "../contexts/ContextProvider";
import axios from 'axios';
import "../../css/app.css";
import "../../css/game.css";
import "../../css/category.css";

const shuffleArray = (array) => {
  if (!array || !Array.isArray(array)) return [];
  return [...array].sort(() => Math.random() - 0.5);
};

export default function Game() {
  // Přidáno setMaxScore do destrukturalizace kontextu
  const { difficulty, user, setScore, setMaxScore } = useStateContext();
  const navigate = useNavigate();

  // --- STAVY PRO PRŮBĚH HRY ---
  const [step, setStep] = useState("intro");
  const [categories, setCategories] = useState([]);
  const [catIndex, setCatIndex] = useState(0);
  const [categoryItems, setCategoryItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Lokální stavy pro body v této relaci
  const [localScore, setLocalScore] = useState(0); 
  const [accumulatedMax, setAccumulatedMax] = useState(0); // Průběžný součet max. bodů
  
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [initializing, setInitializing] = useState(true);

  const [userInput, setUserInput] = useState("");

  // Ochrana obtížnosti
  useEffect(() => {
    if (difficulty === null || difficulty === undefined) navigate("/");
  }, [difficulty, navigate]);

  // Načtení kategorií
  useEffect(() => {
    fetch("/api/categories")
      .then(r => r.json())
      .then(data => {
        setCategories(data);
        if (data.length === 0) setInitializing(false);
      })
      .catch(err => {
        console.error("Chyba:", err);
        setInitializing(false);
      });
  }, []);

  // Načtení edukativních sliderů
  useEffect(() => {
    const category = categories[catIndex];
    if (category) {
      setLoadingItems(true);
      fetch(`/api/category-items?category_id=${category.id}`)
        .then(r => r.json())
        .then(data => {
          setCategoryItems(data);
          setLoadingItems(false);
          setInitializing(false);
        })
        .catch(err => {
          setLoadingItems(false);
          setInitializing(false);
        });
    }
  }, [catIndex, categories]);

  // NAČTENÍ OTÁZEK A VÝPOČET MAXIMÁLNÍCH BODŮ
  const startCategory = async () => {
    const category = categories[catIndex];
    if (!category) return;
    setLoadingQuestions(true);
    try {
      const res = await fetch(`/api/questions?category_id=${category.id}&difficulty_id=${difficulty}`);
      if (!res.ok) throw new Error("Chyba serveru");
      const data = await res.json();
      
      if (data && data.length > 0) {
        // --- VÝPOČET MAX BODŮ PRO TUTO KATEGORII (Postgres kompatibilní) ---
        let maxInThisCategory = 0;
        data.forEach(q => {
          if (q.answers) {
            q.answers.forEach(a => {
              // Sčítáme body u všech správných odpovědí
              if (a.is_correct === true || String(a.is_correct) === 'true') {
                maxInThisCategory += (Number(a.points) || 0);
              }
            });
          }
        });

        // Akumulujeme maximum (přičítáme k předchozím kapitolám)
        setAccumulatedMax(prev => prev + maxInThisCategory);

        const shuffled = shuffleArray(data).map(q => ({
          ...q,
          answers: q.type === 2 || q.type === 3 ? q.answers : shuffleArray(q.answers)
        }));
        setQuestions(shuffled);
        setQIndex(0);
        setStep("question");
      }
    } catch (err) {
      console.error(err);
      alert("Došlo k chybě při načítání otázek.");
    } finally {
      setLoadingQuestions(false);
    }
  };

  // FINÁLNÍ ULOŽENÍ
  const saveGameResults = async (finalScore) => {
    setSaving(true);
    
    try {
        const payload = {
            username: user?.name || "Anonymní hráč",
            points: finalScore,
            difficulty: difficulty,
        };
        
        await axios.post('/api/dashboard/save', payload);
        
        // Zápis do Contextu (použijeme nasbírané accumulatedMax)
        setScore(finalScore); 
        setMaxScore(accumulatedMax); 

        navigate("/gameEnd"); 
    } catch (err) {
        console.error("Chyba při ukládání:", err);
        setScore(finalScore);
        setMaxScore(accumulatedMax);
        navigate("/gameEnd");
    } finally {
        setSaving(false);
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
    if (revealed) return;
    
    if (question.type === 2 || question.type === 3) {
      if (userInput.trim().length === 0) return;
    } else {
      if (selectedAnswers.length === 0) return;
    }

    let earned = 0;
    let correctIds = [];

    // Game.jsx - uvnitř funkce confirmAnswer pro typ 3
    if (question.type === 3) {
      const matchingAnswer = question.answers.find(a => {
        try {
          // 1. Očistíme regex od (init) příznaků z Postgresu, pokud tam jsou
          const cleanPattern = a.text.replace('(?i)', '');
          // 2. Vytvoříme striktní regex: začátek ^, skupina se vzorem, konec $
          const regex = new RegExp(`^(${cleanPattern})$`, 'i');
          // 3. Otestujeme otrimovaný vstup uživatele
          return regex.test(userInput.trim());
        } catch (e) { 
          return false; 
        }
      });

      if (matchingAnswer) {
        if (matchingAnswer.is_correct) earned = Number(matchingAnswer.points) || 0;
        correctIds = [matchingAnswer.id]; 
      }
      setSelectedAnswers(correctIds);

    } else if (question.type === 2) {
      question.answers.forEach(a => {
        try {
          const regex = new RegExp(a.text);
          if (regex.test(userInput)) {
            earned += (Number(a.points) || 0);
            correctIds.push(a.id);
          }
        } catch (e) {}
      });
      setSelectedAnswers(correctIds);
    } else if (question.type === 1) {
      question.answers.forEach(a => {
        if (selectedAnswers.includes(a.id) && a.is_correct) earned += (Number(a.points) || 0);
      });
    } else {
      const chosen = question.answers.find(a => a.id === selectedAnswers[0]);
      if (chosen && chosen.is_correct) earned = Number(chosen.points) || 0;
    }

    setRevealed(true);
    setLocalScore(s => s + earned);
  };

  const nextQuestion = () => {
    setSelectedAnswers([]);
    setRevealed(false);
    setUserInput("");
    if (qIndex + 1 < questions.length) {
      setQIndex(i => i + 1);
    } else {
      if (catIndex + 1 < categories.length) {
        setCatIndex(i => i + 1);
        setStep("intro");
      } else {
        // KONEC HRY - použijeme lokální skóre
        saveGameResults(localScore);
      }
    }
  };

  const nextSlide = () => setActiveItemIndex(prev => (prev < categoryItems.length - 1 ? prev + 1 : 0));
  const prevSlide = () => setActiveItemIndex(prev => (prev > 0 ? prev - 1 : categoryItems.length - 1));

  // --- RENDERY (BEZE ZMĚN) ---

  if (initializing || saving || loadingQuestions || (step === "intro" && loadingItems)) {
    return (
      <div className="loading">
        <OrbitProgress color="#3E885B" variant="track-disc" speedPlus="0" easing="ease-in-out" />
      </div>
    );
  }

  if (difficulty === null || difficulty === undefined) return null;
  const category = categories[catIndex];
  const question = questions[qIndex];

  if (step === "intro" && category) {
    const currentItem = categoryItems[activeItemIndex];
    return (
      <div className="intro-shell">
        <div className="intro-grid">
          <div className="intro-slider-container">
            {categoryItems.length > 0 ? (
              <>
                <div className="tip-card slider-wrapper cust-box">
                  <div className="tip-content slider-content">
                    <div className="tip-header">
                      <div className="tip-badge">{activeItemIndex + 1}</div>
                      <h3 className="tip-title">{currentItem?.title || "Informace"}</h3>
                    </div>
                    <div className="slider-body"><p className="tip-text">{currentItem?.text}</p></div>
                    <div className="slider-navigation">
                      <div className="slider-arrows">
                        <button className="slider-btn" onClick={prevSlide}>❮</button>
                        <button className="slider-btn" onClick={nextSlide}>❯</button>
                      </div>
                    </div>
                  </div>
                  <div className="slider-dots">
                    {categoryItems.map((_, i) => (
                      <span key={i} className={`dot ${i === activeItemIndex ? 'active' : ''}`} onClick={() => setActiveItemIndex(i)} />
                    ))}
                  </div>
                </div>
                <div className="slider-toc cust-box">
                  <h4>Obsah kapitoly</h4>
                  <div className="toc-list">
                    {categoryItems.map((item, i) => (
                      <button key={i} className={`toc-item ${i === activeItemIndex ? 'active' : ''}`} onClick={() => setActiveItemIndex(i)}>
                        <span className="toc-number">{i + 1}</span>
                        <span className="toc-text">{item.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="tip-card cust-box"><p className="tip-text">Žádné doplňující informace.</p></div>
            )}
          </div>
          <div className="intro-center">
            <div className="intro-center-card cust-box">
              <h1 className="intro-title">{category.title}</h1>
              <div className="intro-desc" dangerouslySetInnerHTML={{ __html: category.desc }} />
              <div className="intro-actions" style={{marginTop: '25px'}}>
                <button className="btn-primary" onClick={startCategory}>Pokračovat k otázkám</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "question" && question) {
    return (
      <div className="game-container">
        <div className={`game-question cust-box ${question.img ? 'has-image' : 'no-image'}`}>
          <div className={question.img ? "question-layout" : "question-simple"}>
            {question.img && (
              <div className="question-image-container">
                <div className="question-img-wrapper">
                  <img src={question.img} alt="Úkol" className="question-img" />
                </div>
              </div>
            )}

            <div className="question-content">
              <div className="question-header">
                <div className="game-progress-container">
                  <div className="category-label">{category.title}</div>
                  <div className="progress-text">Otázka {qIndex + 1} z {questions.length}</div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${((qIndex + 1) / questions.length) * 100}%` }}></div>
                  </div>
                </div>
                <h2>{question.text}</h2>
              </div>
              
              <div className="answers">
                {question.type === 3 ? (
                  <div className="text-answer-wrapper">
                    <h3>Zadejte odpověď:</h3>
                    <input 
                      type="text" 
                      className="game-input" 
                      placeholder="Zadejte odpověď..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      disabled={revealed}
                      autoFocus
                    />
                  </div>
                ) : question.type === 2 ? (
                  <div className="text-answer-wrapper">
                    <div className="password-checklist">
                      {question.answers.map(a => {
                        let isMet = false;
                        try { isMet = new RegExp(a.text).test(userInput); } catch (e) {}
                        const statusClass = isMet ? "is-correct-exp" : "is-missed-exp";
                        return (
                          <div key={a.id} className={`explanation-box ${statusClass}`}>
                            <div className="explanation-icon">{isMet ? "✓" : "X"}</div>
                            <div className="explanation-content">
                              <strong style={{ fontSize: '0.9rem' }}>{a.explanation}</strong>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <input 
                      type="text" 
                      className="game-input" 
                      placeholder="Zadejte odpověď..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      disabled={revealed}
                      autoFocus
                    />
                  </div>
                ) : (
                  question.answers.map((a, i) => {
                    const isSelected = selectedAnswers.includes(a.id);
                    let state = revealed ? (a.is_correct ? (isSelected ? "correct" : "missed") : (isSelected ? "wrong" : "")) : "";
                    return (
                      <label key={a.id} className={`answer-option ${state} ${isSelected ? 'selected' : ''}`}>
                        <input
                          type={question.type === 1 ? "checkbox" : "radio"}
                          name="answer"
                          disabled={revealed}
                          checked={isSelected}
                          onChange={() => pickAnswer(a)}
                        />
                        <span className="answer-letter">{String.fromCharCode(65 + i)}</span>
                        <span className="answer-text">{a.text}</span>
                      </label>
                    );
                  })
                )}
              </div>
              
              <button 
                className="btn-primary" 
                onClick={revealed ? nextQuestion : confirmAnswer} 
                disabled={(question.type === 2 || question.type === 3) ? userInput.trim() === "" : selectedAnswers.length === 0}
              >
                {revealed ? "Další otázka" : "Potvrdit odpověď"}
              </button>
            </div>
          </div>
        </div>

        {revealed && (
  <div className="explanations-outer">
    {question.type === 3 ? (
      // --- SPECIÁLNÍ LOGIKA PRO TYP 3 (Textový vstup) ---
      (() => {
        // Najdeme správnou odpověď pro nápovědu
        const correctAns = question.answers.find(a => a.is_correct);
        // Zjistíme, zda uživatel trefil ID správné odpovědi
        const isUserCorrect = selectedAnswers.includes(correctAns?.id);

        return (
          <div className={`explanation-box ${isUserCorrect ? "is-correct-exp" : "is-wrong-exp"}`}>
            <div className="explanation-icon">{isUserCorrect ? "✓" : "!"}</div>
            <div className="explanation-content">
              <strong>{isUserCorrect ? "Správně" : "Špatně"}</strong>
              <p>Možné odpovědi jsou: <strong>{correctAns?.explanation}</strong></p>
            </div>
          </div>
        );
      })()
    ) : (
      // --- KLASICKÁ LOGIKA PRO OSTATNÍ TYPY ---
      question.answers
        .filter(a => {
          const isSelected = selectedAnswers.includes(a.id);
          const isCorrect = a.is_correct;
          return (isSelected || isCorrect) && a.explanation;
        })
        .map(a => {
          const isSelected = selectedAnswers.includes(a.id);
          const isCorrect = a.is_correct;
          
          let statusClass = isCorrect && isSelected ? "is-correct-exp" : (isCorrect ? "is-missed-exp" : "is-wrong-exp");
          let statusTitle = "";

          if (question.type === 2) {
            statusTitle = isCorrect && isSelected ? "Splněno" : "Nesplněno";
          } else {
            statusTitle = isCorrect && isSelected ? "Správná odpověď: " + a.text : (isCorrect ? "Chybějící odpověď: " + a.text : "Proč je špatně: " + a.text);
          }

          return (
            <div key={`exp-${a.id}`} className={`explanation-box ${statusClass}`}>
              <div className="explanation-icon">{isCorrect && isSelected ? "✓" : "!"}</div>
              <div className="explanation-content">
                <strong>{statusTitle}</strong>
                <p>{a.explanation}</p>
              </div>
            </div>
          );
        })
    )}
  </div>
)}
      </div>
    );
  }

  return null;
}