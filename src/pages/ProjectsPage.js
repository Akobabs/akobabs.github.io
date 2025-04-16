import React from 'react';

function ProjectsPage() {
    return (
        <section className="projects">
            <h2>🧪 Projects</h2>
            <p className="projects-intro">
                A showcase of my diverse projects spanning healthcare, fintech, education systems, cybersecurity, and more—applying data science, machine learning, and computer vision to solve real-world problems.
            </p>

            {/* Plant Disease Detection */}
            <div className="project-card">
                <h3>🌱 Computer-Aided Vision for Plant Disease Detection</h3>
                <p>
                    <strong>XAI Laboratory | Mar. 2025 – Present</strong><br />
                    <em>Technologies:</em> Python, TensorFlow, OpenCV, GradCAM<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/COMPUTER-AIDED-VISION-FOR-PLANT-DISEASE-DETECTION" target="_blank" rel="noopener noreferrer">Plant-Disease-Detection</a>
                </p>
                <p>Contributed to a project using computer vision to detect plant diseases in agricultural settings. Implemented explainable AI techniques (GradCAM) to ensure transparency in model predictions.</p>
            </div>

            {/* Lung Cancer Detection */}
            <div className="project-card">
                <h3>📸 Lung Cancer Detection with Computer-Aided Vision</h3>
                <p>
                    <strong>M.O. Oyediran & O.S. Ojo Lab, Ajayi Crowther University | May 2024 – Dec. 2024</strong><br />
                    <em>Technologies:</em> Python, TensorFlow, OpenCV, Interactive Visualization Tools<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/Lung-Cancer-Detection-with-Computer-Aided-Vision-main" target="_blank" rel="noopener noreferrer">Lung-Cancer-Detection</a>
                </p>
                <p>Built a CNN-based system to classify lung cancer from medical imaging data. Created dashboards to visualize cloud-based ML model performance and detect anomalies, supporting clinical diagnostics.</p>
            </div>

            {/* Spam Classification */}
            <div className="project-card">
                <h3>📧 Multiscale Spam Detection</h3>
                <p>
                    <strong>Independent Project | 2024</strong><br />
                    <em>Technologies:</em> Python, Scikit-learn, NLTK, Pandas<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/main_multiscale_spam_detection" target="_blank" rel="noopener noreferrer">multiscale_spam_detection</a>
                </p>
                <p>Created a predictive engine to classify spam in social media and email using harmonized text datasets and vectorized semantic features. Applied NLP techniques for improved accuracy.</p>
            </div>

            {/* Brain Stroke Prediction */}
            <div className="project-card">
                <h3>🧬 Brain Stroke Prediction System</h3>
                <p>
                    <strong>Undergraduate Thesis | Jan. 2022 – Dec. 2022</strong><br />
                    Dr. Fagbuagun’s Lab, Department of Computer Science, FUOYE<br />
                    <em>Technologies:</em> Python, Scikit-learn, Pandas, NumPy, Matplotlib<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/Strokesss" target="_blank" rel="noopener noreferrer">Strokes</a>
                </p>
                <p>Developed a machine learning model to predict stroke risk using patient health data. Performed data cleaning, feature engineering, and model evaluation to achieve high accuracy. Compared algorithms like Logistic Regression and Random Forest, recommending the best for clinical use.</p>
            </div>

            {/* Artificial Immune System for Intrusion Detection */}
            <div className="project-card">
                <h3>🛡️ Artificial Immune System for Network Intrusion Detection</h3>
                <p>
                    <strong>Software Research Project | Dec. 2020 – Apr. 2021</strong><br />
                    Dr. Ayogu’s Lab, Department of Computer Science, FUOYE<br />
                    <em>Technologies:</em> Python, Scikit-learn, Pandas, Network Traffic Datasets<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/Artificial-Immune-System-for-Cyber-Threat-" target="_blank" rel="noopener noreferrer">AIS for Cyber Threat</a>
                </p>
                <p>Modeled an immune-inspired detection system using B-cell and T-cell analogies to identify malicious network traffic. Simulated intrusions with preprocessed datasets and documented frameworks.</p>
            </div>

            {/* Blockchain in Loan Management */}
            <div className="project-card">
                <h3>🔗 Blockchain in Multiscale Loan Management Systems</h3>
                <p>
                    <strong>Undergraduate Seminar | Jun. 2021 – Dec. 2021</strong><br />
                    Dr. Fagbuagun’s Lab, Department of Computer Science, FUOYE<br />
                    <em>Technologies:</em> Python, Scikit-learn, Django, Blockchain (Solidity – Beginner)<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/loan-management-system-django-master" target="_blank" rel="noopener noreferrer">loan-management-system-django</a>
                </p>
                <p>Explored blockchain integration with machine learning for transparent loan management. Developed a system to score loan applicants using ML models, ensuring lending transparency via blockchain.</p>
            </div>

            {/* Text Based Sentiment Analysis */}
            <div className="project-card">
                <h3>📊 Text Based Sentiment Analysis</h3>
                <p>
                    <strong>Independent Project | 2024</strong><br />
                    <em>Technologies:</em> Python, NLTK, Node.js, npm, Git<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/Text-Based-Sentiment-Analysis" target="_blank" rel="noopener noreferrer">Text Based Sentiment Analysis</a>
                </p>
                <p>A powerful and interactive web app that analyzes text and predicts whether it's Positive 😊 or Negative 😡 using state-of-the-art Natural Language Processing (NLP) and Machine Learning (ML) techniques.</p>
            </div>

            {/* Vehicle Predictive Maintenance */}
            <div className="project-card">
                <h3>🚗 Vehicle Predictive Maintenance System</h3>
                <p>
                    <strong>Independent Project | 2024</strong><br />
                    <em>Technologies:</em> Python, Django, PostgreSQL, Scikit-learn<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/ML-Based-Vehicle-Predictive-Maintenance-System-with-Real-Time-Visualization-main" target="_blank" rel="noopener noreferrer">ML-Based-Vehicle-Predictive-Maintenance</a>
                </p>
                <p>Developed a Django-based backend for vehicle predictive maintenance and driver behavior analysis. Integrated ML models to log alerts, detect overspeeding, and provide real-time updates.</p>
            </div>

            {/* Transcript Tower */}
            <div className="project-card">
                <h3>📚 Transcript Tower: Academic Transcript System</h3>
                <p>
                    <strong>Independent Project | 2024</strong><br />
                    <em>Technologies:</em> Python, Django, MySQL<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/TranscriptTower-main" target="_blank" rel="noopener noreferrer">TranscriptTower</a>
                </p>
                <p>Developed a web-based system for managing academic transcripts, integrating with MySQL for efficient data storage and retrieval. Streamlined transcript processing for educational institutions.</p>
            </div>

            {/* Traveling Salesman Problem */}
            <div className="project-card">
                <h3>🗺️ Traveling Salesman Problem using Genetic Algorithm</h3>
                <p>
                    <strong>Independent Project | 2024</strong><br />
                    <em>Technologies:</em> Python, NumPy, Matplotlib<br />
                    <em>Repo:</em> <a href="https://github.com/Akobabs/Traveling-Salesman-Problem-using-Genetic-Algorithm-main" target="_blank" rel="noopener noreferrer">Traveling-Salesman-Problem</a>
                </p>
                <p>Implemented a genetic algorithm to solve the Traveling Salesman Problem, optimizing routes for minimal travel distance. Visualized results using Matplotlib to demonstrate efficiency.</p>
            </div>
        </section>
    );
}

export default ProjectsPage;