import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="game-container">
            <div className="game-question cust-box no-image" style={{ textAlign: 'center' }}>
                <h1>404 - Stránka nenalezena</h1>
                <p style={{ margin: '30px 0', opacity: 0.8 }}>Ups! Tuto stránku se nepodařilo najít. Možná byla přesunuta, odstraněna nebo jste zadali nesprávnou adresu.</p>
                <button className="btn-primary" onClick={() => navigate('/')}>Vráť mě do bezpečí</button>
            </div>
        </div>
    );
}