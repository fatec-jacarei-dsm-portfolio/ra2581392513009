import React, { useState } from 'react';
import '../styles/contact.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Por favor, insira um email válido.');
            return;
        }

        const form = e.target;
        fetch('https://formspree.io/f/mvgodzyg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        }).then((response) => {
            if (response.ok) {
                setSuccess('Mensagem enviada com sucesso!');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setError('');
            } else {
                setError('Ocorreu um erro ao enviar o formulário. Tente novamente.');
            }
        }).catch((error) => {
            setError('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        });
    };

    return (
        <div className="contact-container">
            <h1>Contato</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Assunto:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
};

export default ContactPage;