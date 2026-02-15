import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "../../../resources/css/app.css"; 
import "../../../resources/css/login.css"; 

export default function Login() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const { login } = useStateContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() === "") {
            setError("Prosím, zadejte uživatelské jméno.");
            return;
        }
        if (login(username)) {
            navigate("/dashboard");
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
                        setError(""); // smaže chybu při psaní
                    }}
                />
                <button onClick={handleLogin}>Hrát</button>
            </div>
        </div>
    );
}

