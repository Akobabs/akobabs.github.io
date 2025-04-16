import React from 'react';

function ContactPage() {
    return (
        <section className="contact">
            <h2>📬 Let's Connect</h2>
            <p className="contact-intro">
                I'm always open to collaboration, project ideas, research, or just a good tech conversation. Feel free to reach out through any of the platforms below:
            </p>
            <div className="contact-grid">
                <div className="contact-card">
                    <i className="fas fa-envelope"></i>
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:akorede.ademola@yahoo.com" target="_blank" rel="noopener noreferrer">
                            akorede.ademola@yahoo.com
                        </a>
                    </p>
                </div>
                <div className="contact-card">
                    <i className="fab fa-linkedin"></i>
                    <h3>LinkedIn</h3>
                    <p>
                        <a href="https://www.linkedin.com/in/akorede-adejare-ademola-082105273/" target="_blank" rel="noopener noreferrer">
                            Connect with me
                        </a>
                    </p>
                </div>
                <div className="contact-card">
                    <i className="fab fa-github"></i>
                    <h3>GitHub</h3>
                    <p>
                        <a href="https://github.com/akobabs" target="_blank" rel="noopener noreferrer">
                            Explore my projects
                        </a>
                    </p>
                </div>
                <div className="contact-card">
                    <i className="fab fa-whatsapp"></i>
                    <h3>WhatsApp</h3>
                    <p>
                        <a href="https://wa.me/2347080225590" target="_blank" rel="noopener noreferrer">
                            Chat with me
                        </a>
                    </p>
                </div>
                <div className="contact-card">
                    <i className="fab fa-twitter"></i>
                    <h3>Twitter (X)</h3>
                    <p>
                        <a href="https://x.com/AkobabsAa" target="_blank" rel="noopener noreferrer">
                            Follow me
                        </a>
                    </p>
                </div>
                <div className="contact-card">
                    <i className="fab fa-facebook"></i>
                    <h3>Facebook</h3>
                    <p>
                        <a href="https://facebook.com/akorede.ademola.98499/" target="_blank" rel="noopener noreferrer">
                            Friend me
                        </a>
                    </p>
                </div>
                <div className="contact-card">
                    <i className="fas fa-globe"></i>
                    <h3>Website</h3>
                    <p>
                        <a href="https://akoredeademola.github.io" target="_blank" rel="noopener noreferrer">
                            My Portfolio
                        </a>
                    </p>
                </div>
                <div className="contact-card location">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Location</h3>
                    <p>Based in Lagos State, Nigeria</p>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;