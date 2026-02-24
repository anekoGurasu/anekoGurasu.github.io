import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useState } from "react";

export default function Nav() {
    const { token, setUser, setToken } = useStateContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        closeMenu();
        navigate('/login');
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="top-menu">
            <div className="nav-container">
                {/* LOGO ZŮSTÁVÁ CELÉ */}
                <div 
                    className="logo" 
                    onClick={() => { navigate('/'); closeMenu(); }} 
                    style={{ cursor: 'pointer' }}
                >
                    <span className="logo-first">I</span>nternet
                    <span className="logo-first">B</span>ez
                    <span className="logo-first">O</span>bav
                    <span className="logo-first">.</span>cz
                </div>

                <div className="nav-actions">
                    {/* MENU POLOŽKY */}
                    <ul className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
                        <li><NavLink to="/" end onClick={closeMenu}>Domů</NavLink></li>
                        <li><NavLink to="/dashboard" onClick={closeMenu}>Výsledky</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Kontakt</NavLink></li>
                        
                        {token && (
                            <li className="mobile-only">
                                <button onClick={handleLogout} className="logout-btn">Odhlásit se</button>
                            </li>
                        )}
                    </ul>

                    {/* DESKTOP ODHLÁŠENÍ */}
                    {token && (
                        <div className="nav-right desktop-only">
                            <button onClick={handleLogout} className="logout-btn">
                                Odhlásit se
                            </button>
                        </div>
                    )}

                    {/* BURGER TLAČÍTKO */}
                    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}