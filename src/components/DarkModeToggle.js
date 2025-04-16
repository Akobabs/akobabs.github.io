// src/components/DarkModeToggle.js
import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '0.5rem 1rem',
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: '"Roboto Mono", monospace'
            }}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;