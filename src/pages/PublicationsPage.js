// src/pages/PublicationsPage.js
import React from 'react';

function PublicationsPage() {
    return (
        <section className="publications">
            <h2>📝 Publications</h2>
            <p className="publications-intro">My research papers are currently under review and will be published soon. Stay tuned for exciting contributions in AI, healthcare, and data science!</p>
            <div className="coming-soon">
                <h3 className="coming-soon-text">Coming Soon...</h3>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <p>Review Process in Progress</p>
            </div>
            <div className="linkedin-posts">
                <h3>📣 Recent Updates on LinkedIn</h3>
                <p>While awaiting my publications, check out some of my recent posts on LinkedIn to learn more about my work and ongoing research.</p>
                <div className="linkedin-post">
                    <h4>Update on XAI Laboratory Research – Mar 2025</h4>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:placeholder1" height="500" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    <p><a href="https://www.linkedin.com/in/akorede-adejare-ademola-082105273/recent-activity/" target="_blank">View on LinkedIn</a></p>
                </div>
                {/* Add other LinkedIn posts as needed */}
            </div>
        </section>
    );
}

export default PublicationsPage;