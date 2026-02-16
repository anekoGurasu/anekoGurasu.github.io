import { useState } from "react";
// 1. Změna: Místo react-router-dom použijeme router z Inertie
import { router } from "@inertiajs/react"; 
import { useStateContext } from "../contexts/ContextProvider";
// 2. Tip: Cesty k CSS zkontroluj, jestli sedí po přesunu (pravděpodobně ../../css/...)
import "../../css/app.css";
import "../../css/login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const { login } = useStateContext();

    const handleLogin = () => {
        if (username.trim() === "") {
            setError("Prosím, zadejte uživatelské jméno.");
            return;
        }
        
        if (login(username)) {
            // 3. Změna: Místo navigate("/dashboard") použijeme router.visit
            router.visit("/dashboard");
        } else {
            setError("Nepodařilo se přihlásit.");
        }
    };

    return (
        <div className="login-wrapper">
            <h1 className="site-title">
                <span className="site-title-first">I</span>nternet
                <span className="site-title-first">B</span>ez
                <span className="site-title-first">O</span>bav
                <span className="site-title-first">.</span>cz
            </h1>
            <div className="login-form cust-box">
                <p className="login-error">{error || "\u00A0"}</p>
                <h1>Přihlášení</h1>
                <input
                    type="text"
                    placeholder="Uživatelské jméno"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setError(""); 
                    }}
                />
                <button onClick={handleLogin}>Hrát</button>
            </div>
        </div>
    );
}