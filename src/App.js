import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import SkillsPage from './pages/SkillsPage';
import CV from './pages/CV';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
                <Header />
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/education" element={<EducationPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/publications" element={<PublicationsPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;