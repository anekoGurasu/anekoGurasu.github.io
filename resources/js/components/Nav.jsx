import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function Nav() {
    const {token, setUser, setToken} = useStateContext();
    const navigate = useNavigate();

    return (
        <nav className="top-menu">
            <div className="nav-container">
                <div className="nav-left">
                    <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                        <span className="logo-first">I</span>nternet
                        <span className="logo-first">B</span>ez
                        <span className="logo-first">O</span>bav
                        <span className="logo-first">.</span>cz
                    </div>
                    <ul className="menu-items">
                        <li><NavLink to="/">Domů</NavLink></li>
                        <li><NavLink to="/dashboard">Výsledky</NavLink></li>
                    </ul>
                </div>
                {token && (
                    <div className="nav-right">
                        <button onClick={() => {
                            setUser(null);
                            setToken(null);
                            navigate('/login');
                        }}>
                            Odhlásit se
                        </button>
                    </div>
                )}
            </div>
        </nav>

    );
}
