import { useState } from "react";
// 1. Změna: Místo routeru z Inertie používáme useNavigate a Link z React Routeru
import { useNavigate, Link } from "react-router-dom"; 
import { useStateContext } from "../contexts/ContextProvider";
import "../../css/app.css";
import "../../css/home.css";

export default function Home() {
    const { user, setDifficulty } = useStateContext();
    const [showModal, setShowModal] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(1);
    const navigate = useNavigate(); // Hook pro rychlé přesměrování v rámci SPA

    const handlePlayClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedDifficulty(1);
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
    <div className="home-main-split">
        {/* LEVÁ ČÁST: Subtilní uvítání a akce */}
        <section className="home-intro-column">
            <h2 className="welcome-title-small">
                Vítej, hráči <span className="user-highlight">{user?.name}</span>!
            </h2>
            
            <div className="intro-text-compact">
                <p>
                    Vstup do světa digitálních technologií s jistotou. Tato hra tě provede nástrahami internetu 
                    a ukáže ti, jak se v něm pohybovat sebevědomě a bez rizika.
                </p>
                <p>
                    Tvým úkolem je čelit reálným situacím, odhalit skrytá nebezpečí a zvolit tu nejbezpečnější cestu.
                </p>
            </div>
            <div className="quick-stats">
                <div className="stat-box">
                    <span className="stat-value">90+</span>
                    <span className="stat-label">Úloh</span>
                </div>
                <div className="stat-box">
                    <span className="stat-value">3</span>
                    <span className="stat-label">Kategorie</span>
                </div>
                <div className="stat-box">
                    <span className="stat-value">3</span>
                    <span className="stat-label">Obtížnosti</span>
                </div>
            </div>
            <button className="btn-primary" onClick={handlePlayClick}>Hraj</button>
        </section>

        {/* PRAVÁ ČÁST: Karta s pravidly */}
        <section className="home-rules-column">
            <div className="rules-card-compact">
                <h3>Základní pravidla hry</h3>
                {/* Tady musí být tato třída, aby fungovala linka a kuličky */}
                <ul className="rules-timeline">
                    <li>Tvým úkolem je vybrat správnou odpověď z nabízených možností, nebo doplnit odpověď vlastní.</li>
                    <li>Za každou správnou trefu si připíšeš cenné body na své konto.</li>
                    <li>Po každé odpovědi se ti zobrazí zdůvodnění, které ti pomůže pochopit danou problematiku.</li>
                    <li>Cílem je porozumět bezpečnosti, ne jen nasbírat body.</li>
                </ul>
            </div>
        </section>
    </div>
</div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Vyber obtížnost</h2>
                        <div className="difficulty-options">
                            {[
                                { val: 1, label: "Lehká" },
                                { val: 2, label: "Střední" },
                                { val: 3, label: "Těžká" }
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