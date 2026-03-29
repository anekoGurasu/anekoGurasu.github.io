import React, { useState } from 'react';
import "../../css/app.css";
import "../../css/contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage("Odesílám...");

        try {
            const response = await fetch('/poslat-kontakt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // Laravel ve web.php tohle obvykle vyžaduje
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage("Děkujeme! Tvá zpráva byla úspěšně odeslána.");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatusMessage("Ups! Chyba při odesílání. Zkus to za chvilku.");
            }
        } catch (error) {
            setStatusMessage("Nepodařilo se spojit se serverem.");
        }
    };

    return (
        <div className="contact-page">
            <div className="content-container cust-box">
                <div className="contact-header">
                    <h1>Kontakt</h1>
                    {statusMessage && (
                        <div className="status-message-inline">
                            {statusMessage}
                        </div>
                    )}
                </div>
                <div className="contact-layout">
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
                        <div className="contact-prompt-box">
                            <p>Máš nápad na vylepšení, našel jsi chybu, nebo se chceš jen na něco zeptat?</p>
                            <p className="highlight-text">Neváhej mě kontaktovat!</p>
                        </div>
                    </div>
                    <div className="contact-form-section">
                        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Jméno</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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