// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <div className="nav-container">
                    <Link to="/" className="site-title">ADEMOLA, Akorede Adejare</Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cv">CV</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/publications">Publications</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;