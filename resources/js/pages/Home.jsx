import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "../../css/app.css";
import "../../css/home.css";

export default function Home() {
    const { user, setDifficulty } = useStateContext();
    const [showModal, setShowModal] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(1);
    const navigate = useNavigate();
    const handlePlayClick = () => { setShowModal(true); };
    const handleCancel = () => {
        setShowModal(false);
        setSelectedDifficulty(1);
    };
    const handleConfirm = () => {
        if (selectedDifficulty !== null) {
            setDifficulty(selectedDifficulty);
            navigate("/game");
            setShowModal(false);
        }
    };

    return (
        <div className="home-page">
            <div className="home-content-container cust-box">
                <div className="home-main-split">
                    <section className="home-intro-column">
                        <h2 className="welcome-title-small">Vítej, hráči <span className="user-highlight">{user?.name}</span>!</h2>
                        <div className="intro-text-compact">
                            <p>Vstup do světa digitálních technologií s jistotou. Tato hra tě provede nástrahami internetu a ukáže ti, jak se v něm pohybovat sebevědomě a bez rizika.</p>
                            <p>Prověř si své znalosti v oblasti kybernetické bezpečnosti a nauč se, jak se chránit před online hrozbami.</p>
                        </div>
                        <div className="quick-stats">
                            <div className="stat-box"><span className="stat-value">90+</span><span className="stat-label">Úloh</span></div>
                            <div className="stat-box"><span className="stat-value">3</span><span className="stat-label">Kategorie</span></div>
                            <div className="stat-box"><span className="stat-value">3</span><span className="stat-label">Obtížnosti</span></div>
                        </div>
                        <button className="btn-primary" onClick={handlePlayClick}>Hraj</button>
                    </section>
                    <section className="home-rules-column">
                        <div className="rules-card-compact">
                            <h3>Základní pokyny</h3>
                            <ul className="rules-timeline">
                                <li>Nejprve si prostuduj všechny připravené materiály</li>
                                <li>Spusť test a postupně odpověz na všechny připravené otázky.</li>
                                <li>Po každé odpovědi se ti zobrazí zdůvodnění, které ti pomůže pochopit danou problematiku.</li>
                                <li>Nemusíš nikam spěchat, na každou otázku máš tolik času, kolik zrovna potřebuješ.</li>
                                <li>Nezapomeň, že cílem není bezchybný test, ale tvá schopnost včas rozpoznat rizika, se kterými se můžeš potkat v internetovém prostoru.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Výběr obtížnosti</h2>
                        <div className="difficulty-tip-box">
                            <span className="tip-label">TIP:</span>
                            <div className="tip-text">
                                {selectedDifficulty === 1 && "Body se pouze přičítají, nikdy neodečítají. Ideální pro klidné procvičování."}
                                {selectedDifficulty === 2 && "Body se přičítají i odečítají ve stejném poměru. Skóre nikdy neklesne pod 0."}
                                {selectedDifficulty === 3 && "Za chyby se odečítá více bodů než se přičítá za správné odpovědi. Skóre může být i záporné."}
                                {!selectedDifficulty && "Vyberte obtížnost pro zobrazení pravidel bodování."}
                            </div>
                        </div>
                        <div className="difficulty-options">
                            {[
                                { val: 1, label: "Lehká" },
                                { val: 2, label: "Střední" },
                                { val: 3, label: "Těžká" }
                            ].map((d) => (
                                <label key={d.val} className={`difficulty-pill ${selectedDifficulty === d.val ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="difficulty"
                                        value={d.val}
                                        checked={selectedDifficulty === d.val}
                                        onChange={() => setSelectedDifficulty(d.val)}
                                    />
                                    <span className="custom-radio"></span>
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