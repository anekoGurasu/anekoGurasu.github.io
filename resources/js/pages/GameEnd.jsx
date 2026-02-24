import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useState, useEffect } from "react"; // Přidáno useEffect a useState
import "../../css/app.css";
import "../../css/gameEnd.css";

export default function GameEnd() {
    const { user, score, maxScore, difficulty } = useStateContext();  
    const navigate = useNavigate();
    const [fillWidth, setFillWidth] = useState(0); // Pro plynulý start animace

    const difficultyText = difficulty === 1 ? "Lehká" : difficulty === 2 ? "Střední" : "Těžká";
    
    // Výpočet procentuální úspěšnosti
    // Ošetření: Pokud maxScore neexistuje, použijeme alespoň 1, aby se nedělilo nulou
    const totalMax = maxScore > 0 ? maxScore : 10; // Předpokládané minimum pokud data chybí
    const percentage = Math.round((score / totalMax) * 100);

    useEffect(() => {
        // Krátký timeout zajistí, že se bar "vysune" až po načtení stránky
        const timer = setTimeout(() => {
            setFillWidth(percentage);
        }, 100);
        return () => clearTimeout(timer);
    }, [percentage]);

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="game-end-page">
            <div className="game-end-content cust-box animate-pop">
                <h1 className="game-end-title">Konec hry</h1>
                
                <div className="end-stats-container">
                    <p className="game-end-greeting">Skvělá práce, <strong>{user?.name || "Hráči"}</strong>!</p>
                    
                    <div className="score-main-display">
                        <div className="score-circle">
                            <span className="score-number">{score}</span>
                            <span className="score-separator">/</span>
                            {/* Zobrazení maxScore s fallbackem pro debug */}
                            <span className="score-max">{maxScore || 0}</span>
                        </div>
                        <p className="score-label">Získaných bodů</p>
                    </div>

                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-header">
                            <span>Úspěšnost</span>
                            <span>{percentage}%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div 
                                className="progress-bar-fill" 
                                style={{ width: `${fillWidth}%` }} // Použití lokálního stavu
                            ></div>
                        </div>
                    </div>

                    <div className="end-info-grid">
                        <div className="info-item">
                            <span className="info-label">Obtížnost</span>
                            <span className="info-value">{difficultyText}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Status</span>
                            <span className="info-value">Dokončeno</span>
                        </div>
                    </div>
                </div>

                <div className="game-end-actions">
                    <button className="btn-primary ripple" onClick={() => navigate("/game")}>
                        Hrát znovu
                    </button>
                    <button className="btn-secondary" onClick={handleGoHome}>
                        Zpět na hlavní menu
                    </button>
                </div>
            </div>
        </div>
    );
}