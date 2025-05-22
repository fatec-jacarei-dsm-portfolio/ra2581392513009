import React, { useState } from 'react';
import '../styles/header.css';
import Star from "../assets/star.png"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" src={Star} alt="logo" />
                <a href="/">Laura Gabriel</a>
            </div>
            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">sobre</a></li>
                    <li><a href="/projects">projetos</a></li>
                    <li><a href="/certificate">certificados</a></li>
                    <li><a href="/technology">tecnologias</a></li>
                    <li><a href="/hobbies">hobbies</a></li>
                    {/* <li><a href="/contact">contato</a></li> */}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;
