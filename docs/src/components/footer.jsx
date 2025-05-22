import React from 'react';
import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import "../styles/footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.instagram.com/eulauragabriel" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/eulauragabriel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://wa.me/+5512997584865" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:eulauragabriel@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/eulauragabriel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
                <p>&copy; 2025 Laura Gabriel. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
