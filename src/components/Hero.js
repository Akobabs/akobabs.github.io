import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero">
            <h1>Data Scientist & Researcher</h1>
            <p className="affiliation">Research Assistant [Virtual], XAI Laboratory, Benin City, Edo State NG.</p>
            <p className="credentials">B.Sc. Computer Science, Federal University Oye-Ekiti, 2023</p>
            <p className="intro">Exploring AI and data science to innovate in healthcare, computer vision, and beyond.</p>
            <Link to="/cv" className="cv-button">View CV</Link>
        </div>
    );
}

export default Hero;