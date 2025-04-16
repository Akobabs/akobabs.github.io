import React from 'react';
import Hero from '../components/Hero';
import SummaryCard from '../components/SummaryCard';

function Home() {
    return (
        <>
            <div className="hero">
                <Hero />
            </div>
            <section className="portfolio-summary">
                <h2>Portfolio Summary</h2>
                <SummaryCard />
                <div className="summary-grid">
                    <div className="summary-card">
                        <h3>🧪 Current/Previous Research Engagements</h3>
                        <div className="summary-item">
                            <p>
                                <strong>1. XAI Laboratory, Benin City, Edo State</strong><br />
                                <em>Mar. 2025 – Present, Research Assistant (Virtual)</em><br />
                                Contributing to projects on Explainable AI (XAI) for genomic variant interpretation and zoonotic disease detection in livestock. Focused on model transparency, interpretability, and trust in AI applications in healthcare and agriculture.<br />
                                <em>Tools:</em> Machine learning, computer vision, neural networks, deep learning, data preprocessing, model evaluation, visualization.
                            </p>
                        </div>
                        <div className="summary-item">
                            <p>
                                <strong>2. M.O. Oyediran & O.S. Ojo Lab, Ajayi Crowther University</strong><br />
                                <em>Mar. 2024 – Dec. 2024</em><br />
                                Developed a CNN-based lung cancer classifier and created dashboards for visualizing cloud-based ML model performance and anomalies.<br />
                                <em>Tools:</em> Python, TensorFlow, interactive visualization tools.
                            </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>💻 Current/Previous Technical & Administrative Roles</h3>
                        <div className="summary-item">
                            <p>
                                <strong>1. Ugee Chemicals Ltd, Lagos State</strong><br />
                                <em>Warehouse & Supply Executive, Jan. 2025 – Mar. 2025</em><br />
                                Integrated AI into supply chain management with Tally ERP 9 for real-time insights.
                            </p>
                        </div>
                        <div className="summary-item">
                            <p>
                                <strong>2. Ajayi Crowther University, Oyo State</strong><br />
                                <em>Assistant System Analyst / Network Support (NYSC, Mar. 2024 – Dec. 2024)</em><br />
                                Maintains network infrastructure, manages student databases, automated ID card processing (75% faster), and supports CBT exams.<br />
                                <em>Administrative Officer (Nov. 2023 – Mar. 2024)</em><br />
                                Digitized onboarding and coordinated records.
                            </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>🧠 AI & Data Science Projects</h3>
                        <ul>
                            <li><strong>Computer Vision for Plant-Disease Detection:</strong> Applied eXplainable AI (XAI) to visualize model confidence and improve trust in predictions.</li>
                            <li><strong>AI + Healthcare: A Generative AI Approach:</strong> Explored the use of generative AI models in enhancing medical diagnostics and decision-making.</li>
                            <li><strong>Malicious Domain Name Prediction:</strong> Built predictive models to detect malicious domains using lexical and behavioral features.</li>
                            <li><strong>Brain Stroke Prediction (Undergraduate Thesis):</strong> Developed machine learning models to assess and predict stroke risk using patient data.</li>
                            <li><strong>Artificial Immune System for Intrusion Detection:</strong> Implemented immune-inspired algorithms (B-cell/T-cell dynamics) to identify network intrusions.</li>
                            <li><strong>Text-Based Sentiment Analysis:</strong> Used NLP models like SVM, GRU, and BERT to classify sentiments from social media and review datasets.</li>
                        </ul>
                    </div>
                    <div className="summary-card">
                        <h3>🌍 Community, Leadership & Outreach</h3>
                        <div className="summary-item">
                            <p>
                                <strong>President, Give Back Initiative, Atiba LGA (NYSC CDS 2024):</strong> Led tech, agriculture, and healthcare outreach.<br />
                                <strong>Corpers’ Liaison Officer, Ajayi Crowther University (2024):</strong> Bridged NYSC logistics.<br />
                                <em>Volunteer Roles:</em> Digital literacy facilitation, exam supervision, tutored 1000+ students in computing/math.
                            </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>🛠 Technical Skills</h3>
                        <div className="summary-item">
                            <p>
                                <strong>Languages:</strong> Python, R, C++, Java, MATLAB<br />
                                <strong>Frameworks & Tools:</strong> TensorFlow, PyTorch, Scikit-learn, Docker, Django<br />
                                <strong>Cloud & DevOps:</strong> Azure (AZ-104), MLOps<br />
                                <strong>Databases:</strong> SQL, PostgreSQL<br />
                                <strong>Others:</strong> Tally ERP 9, Git, Microsoft Office
                            </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>🎓 Certifications & Training</h3>
                        <ul>
                            <li>Professional Diploma in AI/ML – 3MTT/NITDA</li>
                            <li>Prompt Engineering for ChatGPT – Vanderbilt University</li>
                            <li>Machine Learning with R Studio – Start Tech Academy</li>
                            <li>Various Python, AI, and Data Science Udemy courses</li>
                        </ul>
                    </div>
                    <div className="summary-card">
                        <h3>🏆 Awards & Recognition</h3>
                        <ul>
                            <li>Stanbic IBTC DiSEP Fellow (Selected among top 204/7000+ applicants)</li>
                            <li>Ericmoore Ngharamike Award (2019) – Best in CSC 207</li>
                            <li>Brain of the Year, NACOS FUOYE (2019)</li>
                            <li>6th Best, Access Bank NYSC Business Plan (2023)</li>
                            <li>Osun State Undergraduate Scholarship (2022)</li>
                        </ul>
                    </div>
                    <div className="summary-card">
                        <h3>🔭 Vision & Goals</h3>
                        <div className="summary-item">
                            <p>
                                I aspire to advance AI and computer vision in health diagnostics, robotics, and smart agriculture—especially for underserved communities. With my academic background, technical versatility, and real-world experience, I aim to collaborate globally with researchers, NGOs, and industry leaders to build impactful tech solutions that empower human lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;