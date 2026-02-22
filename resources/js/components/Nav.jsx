import { NavLink, useNavigate } from "react-router-dom"; // Změna na NavLink
import { useStateContext } from "../contexts/ContextProvider";

export default function Nav() {
    const { token, setUser, setToken } = useStateContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        navigate('/login');
    };

    return (
        <nav className="top-menu">
            <div className="nav-container">
                <div className="nav-left">
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
                        {/* NavLink automaticky přidá třídu 'active' */}
                        <li><NavLink to="/" end>Domů</NavLink></li>
                        <li><NavLink to="/dashboard">Výsledky</NavLink></li>
                        <li><NavLink to="/contact">Kontakt</NavLink></li>
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