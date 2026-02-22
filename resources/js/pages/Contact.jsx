import React, { useState } from 'react';
import "../../css/app.css";
import "../../css/contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Odesláno:", formData);
        setStatusMessage("Děkujeme! Tvá zpráva byla úspěšně odeslána.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
    <div className="content-container cust-box">
        {/* HLAVIČKA: Nadpis a Status zpráva vedle sebe */}
        <div className="contact-header">
            <h1>Kontakt</h1>
            {statusMessage && (
                <div className="status-message-inline">
                    {statusMessage}
                </div>
            )}
        </div>
        
        <div className="contact-layout">
            {/* PRAVÝ SLOUPEC: Info + Pobídka */}
    <div className="contact-info-section">
        <div className="contact-details-list">
            <div className="detail-item-modern">
                <strong>Autor</strong>
                <span>Kristýna Trávníčková</span>
            </div>
            <div className="detail-item-modern">
                <strong>E-mail</strong>
                <span>info@internetbezobav.cz</span>
            </div>
            <div className="detail-item-modern">
                <strong>GitHub</strong>
                <span>github.com/anekoGurasu</span>
            </div>
        </div>

        {/* POBÍDKA: Vyplní volné místo pod kontakty */}
        <div className="contact-prompt-box">
            <p>
                Máš nápad na vylepšení, našel jsi chybu, nebo se chceš jen na něco zeptat? 
            </p>
            <p className="highlight-text">
                Neváhej mě kontaktovat!
            </p>
        </div>
    </div>
    {/* LEVÝ SLOUPEC: Formulář (Teď je hlavní dominantou vlevo) */}
    <div className="contact-form-section">
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Jméno</label>
                <input 
                    type="text" 
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tvé jméno"
                    required
                />
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <input 
                    type="email" 
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="tvuj@email.cz"
                    required
                />
            </div>
            <div className="form-group">
                <label>Zpráva</label>
                <textarea 
                    className="form-input"
                    rows="6"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Co máš na srdci?"
                    required
                ></textarea>
            </div>
            <div className="button-group">
                <button type="submit" className="btn-primary">Odeslat zprávu</button>
            </div>
        </form>
    </div>

    
</div>
    </div>
</div>
    );
}