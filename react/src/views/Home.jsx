import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "../../../resources/css/app.css";
import "../../../resources/css/home.css";

export default function Home() {
    const { token, user } = useStateContext();
    const navigate = useNavigate();
    
    if (!token) {
        return <Navigate to="/login" />;
    }
    
    return (
        <div className="home-page">
            <div className="home-content-container">
                <h1>Vítej, hráči <span className="user-highlight">{user?.name}</span>!</h1>
                <section class="intro">
                    <p>
                        Vítej ve vzdělávací hře, která ti pomůže lépe porozumět světu internetu
                        a naučí tě, jak se v něm chovat bezpečně. Čekají tě různé situace, se kterými
                        se můžeš setkat na sociálních sítích, v chatech, e-mailech nebo při hraní online her.
                    </p>
                    <p>
                        Tvým úkolem je správně reagovat, rozpoznat nebezpečí a vybrat nejbezpečnější řešení.
                        Za správné odpovědi získáš body a postupně se z tebe stane skutečný mistr bezpečného internetu.
                    </p>
                </section>
                <section class="rules">
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
                    <button className="btn-primary" onClick={() => navigate("/dashboard")}>Hraj</button>
                    <button className="btn-secondary" onClick={() => navigate("/dashboard")}>Výsledky</button>
                </div>
            </div>
        </div>
    );
}
