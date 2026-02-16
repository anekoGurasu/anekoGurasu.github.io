import { useState } from "react";
// 1. Změna: Místo routeru z Inertie používáme useNavigate a Link z React Routeru
import { useNavigate, Link } from "react-router-dom"; 
import { useStateContext } from "../contexts/ContextProvider";
import "../../css/app.css";
import "../../css/home.css";

export default function Home() {
    const { user, setDifficulty } = useStateContext();
    const [showModal, setShowModal] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(0);
    const navigate = useNavigate(); // Hook pro rychlé přesměrování v rámci SPA

    const handlePlayClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedDifficulty(0);
    };

    const handleConfirm = () => {
        if (selectedDifficulty !== null) {
            setDifficulty(selectedDifficulty);
            // 2. Změna: navigate("/") místo router.visit("/")
            navigate("/game"); 
            setShowModal(false);
        }
    };

    return (
        <div className="home-page">
            <div className="home-content-container cust-box">
                <h1>Vítej, hráči <span className="user-highlight">{user?.name}</span>!</h1>
                <section className="intro">
                    <p>
                        Vítej ve vzdělávací hře, která ti pomůže lépe porozumět světu internetu
                        a naučí tě, jak se v něm chovat bezpečně.
                    </p>
                    <p>
                        Tvým úkolem je správně reagovat, rozpoznat nebezpečí a vybrat nejbezpečnější řešení.
                    </p>
                </section>
                <section className="rules">
                    <h2>Základní pravidla hry</h2>
                    <ul>
                        <li><span className="highlight">Pečlivě</span>&nbsp;si čti každou situaci a zamysli se, co bys udělal/a ve skutečnosti.</li>
                        <li>Vybírej odpověď, která je&nbsp;<span className="highlight">nejbezpečnější</span>&nbsp;a&nbsp;<span className="highlight">nejzodpovědnější</span>.</li>
                        <li>Chraň své&nbsp;<span className="highlight">osobní údaje</span>&nbsp;a nikdy je&nbsp;<span className="highlight">nesdílej</span>&nbsp;s cizími lidmi.</li>
                        <li>Nenech se nachytat&nbsp;<span className="highlight">podvodníky</span>&nbsp;a&nbsp;<span className="highlight">podezřelými odkazy</span>.</li>
                        <li>Za&nbsp;<span className="highlight">správné</span>&nbsp;odpovědi získáváš&nbsp;<span className="highlight">body</span>, za špatné se můžeš poučit z vysvětlení.</li>
                        <li>Cílem není vyhrát, ale&nbsp;<span className="highlight">naučit se</span>, jak být na internetu v bezpečí.</li>
                    </ul>
                </section>
                <div className="button-group">
                    <button className="btn-primary" onClick={handlePlayClick}>Hraj</button>
                    {/* 3. Změna: Pro vnitřní odkazy je nejrychlejší použít Link komponentu, 
                        nebo navigate v onClick */}
                    <button className="btn-secondary" onClick={() => navigate("/dashboard")}>Výsledky</button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Vyber obtížnost</h2>
                        <div className="difficulty-options">
                            {[
                                { val: 0, label: "Lehká" },
                                { val: 1, label: "Střední" },
                                { val: 2, label: "Těžká" }
                            ].map((d) => (
                                <label key={d.val}>
                                    <input
                                        type="radio"
                                        name="difficulty"
                                        value={d.val}
                                        checked={selectedDifficulty === d.val}
                                        onChange={() => setSelectedDifficulty(d.val)}
                                    />
                                    {d.label}
                                </label>
                            ))}
                        </div>
                        <div className="modal-buttons">
                            <button className="btn-primary" onClick={handleConfirm} disabled={selectedDifficulty === null}>Potvrdit</button>
                            <button className="btn-secondary" onClick={handleCancel}>Zrušit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}