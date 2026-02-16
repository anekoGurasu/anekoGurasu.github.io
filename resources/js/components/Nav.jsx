import { Link, useNavigate } from "react-router-dom"; // Změna importu
import { useStateContext } from "../contexts/ContextProvider";

export default function Nav() {
    const { token, setUser, setToken } = useStateContext();
    const navigate = useNavigate(); // Hook pro SPA navigaci

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        // Čisté SPA přesměrování bez reloadu
        navigate('/login');
    };

    return (
        <nav className="top-menu">
            <div className="nav-container">
                <div className="nav-left">
                    {/* Logo nyní používá navigate() pro okamžitý návrat domů */}
                    <div 
                        className="logo" 
                        onClick={() => navigate('/')} 
                        style={{ cursor: 'pointer' }}
                    >
                        <span className="logo-first">I</span>nternet
                        <span className="logo-first">B</span>ez
                        <span className="logo-first">O</span>bav
                        <span className="logo-first">.</span>cz
                    </div>
                    <ul className="menu-items">
                        {/* Link s parametrem 'to' místo 'href' */}
                        <li><Link to="/">Domů</Link></li>
                        <li><Link to="/dashboard">Výsledky</Link></li>
                    </ul>
                </div>
                {token && (
                    <div className="nav-right">
                        <button onClick={handleLogout} className="logout-btn">
                            Odhlásit se
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}