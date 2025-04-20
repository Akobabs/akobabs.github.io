import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav>
                <div className="nav-container">
                    <Link to="/" className="site-title">ADEMOLA, Akorede Adejare</Link>
                    {/* Hamburger Icon */}
                    <button className="hamburger" onClick={toggleMenu}>
                        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                    {/* Navigation Links */}
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/cv" onClick={() => setIsMenuOpen(false)}>CV</Link></li>
                        <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Education</Link></li>
                        <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                        <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
                        <li><Link to="/publications" onClick={() => setIsMenuOpen(false)}>Publications</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;