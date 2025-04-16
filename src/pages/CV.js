// src/pages/CV.js
import React, { useEffect } from 'react';

function CV() {
    useEffect(() => {
        window.location.href = '/Ademola_Akorede_CV.pdf';
    }, []);

    return (
        <section className="cv-redirect">
            <h2>Redirecting to CV...</h2>
            <p>If you are not redirected automatically, <a href="/Ademola_Akorede_CV.pdf">click here to view my CV</a>.</p>
        </section>
    );
}

export default CV;