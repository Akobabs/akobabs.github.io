import React from 'react';

function SkillsPage() {
    return (
        <section className="skills">
            <h2>🛠️ Skills & Competencies</h2>
            <p className="skills-intro">
                A fusion of strong theoretical knowledge, mathematical precision, and real-world implementation.
            </p>

            {/* AI & Machine Learning */}
            <div className="skills-section">
                <h3>🧠 Artificial Intelligence & Machine Learning</h3>
                <p className="quote">"Predicting strokes before they happen. Detecting fraud before it strikes. Coding intelligence into machines."</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    <li>Supervised & Unsupervised Learning</li>
                    <li>Deep Learning (ANN, CNN, RNN)</li>
                    <li>Feature Engineering & Data Labeling</li>
                    <li>Transfer Learning with Pretrained Models</li>
                    <li>Model Deployment (Flask, Streamlit, TensorFlow Serving)</li>
                </ul>
                <p><strong>Scenic Sample:</strong> Developed a brain stroke prediction system using real patient data and trained models to classify high-risk individuals—simulating a virtual clinical assistant.</p>
            </div>

            {/* Mathematics for Computing */}
            <div className="skills-section">
                <h3>🧮 Mathematics for Computing</h3>
                <p className="quote">"Mathematics isn't just numbers; it's logic, structure, and the language of all code."</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    <li>Linear Algebra (Matrices, Eigenvectors)</li>
                    <li>Calculus (Derivatives for Backpropagation)</li>
                    <li>Probability & Statistics (Bayesian Methods, Distributions)</li>
                    <li>Numerical Methods (Newton-Raphson, Simpson’s Rule)</li>
                    <li>Optimization (Gradient Descent, Convex Functions)</li>
                </ul>
                <p><strong>Scenic Sample:</strong> Used Singular Value Decomposition (SVD) to reduce high-dimensional audio features in COVID-19 cough detection, improving model accuracy and speed.</p>
            </div>

            {/* Data Science & Analytics */}
            <div className="skills-section">
                <h3>🧩 Data Science & Analytics</h3>
                <p className="quote">"From messy data to meaningful insights—I tell stories numbers can't speak out loud."</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    <li>Data Cleaning & Preprocessing (pandas, NumPy)</li>
                    <li>Exploratory Data Analysis (EDA)</li>
                    <li>Feature Selection Techniques</li>
                    <li>Predictive Modeling</li>
                    <li>Model Evaluation & Cross-Validation</li>
                </ul>
                <p><strong>Scenic Sample:</strong> Built a predictive engine for classifying social media and email spam across platforms using harmonized text datasets and vectorized semantic features.</p>
            </div>

            {/* Cybersecurity & Network Intelligence */}
            <div className="skills-section">
                <h3>🔐 Cybersecurity & Network Intelligence</h3>
                <p className="quote">"Inspired by immunity, designed for digital defense."</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    <li>Artificial Immune Systems (AIS)</li>
                    <li>Intrusion Detection Models (NIDS, anomaly detection)</li>
                    <li>Firewall & Packet Inspection Simulation</li>
                    <li>Threat Modelling & Signature Analysis</li>
                    <li>Secure Network Protocols</li>
                </ul>
                <p><strong>Scenic Sample:</strong> Simulated a biological B-cell & T-cell inspired immune network for detecting malicious traffic in networked systems—mimicking how the human immune system reacts to viruses.</p>
            </div>

            {/* Programming & Software Development */}
            <div className="skills-section">
                <h3>💻 Programming & Software Development</h3>
                <p className="quote">"Every solution begins with a line of code—clean, readable, and reusable."</p>
                <p><strong>Languages & Tools:</strong></p>
                <ul>
                    <li>Python (NumPy, Pandas, Matplotlib, Scikit-learn)</li>
                    <li>C++ | Java | Bash</li>
                    <li>HTML5, CSS3, JavaScript (Basic)</li>
                    <li>Git & GitHub | VSCode | Jupyter | PyCharm</li>
                    <li>API Development & Integration</li>
                </ul>
                <p><strong>Scenic Sample:</strong> Built a custom backend system in Django for vehicle predictive maintenance and driver behavior—logging alerts, overspeeding, and real-time updates.</p>
            </div>

            {/* Blockchain & Financial Systems */}
            <div className="skills-section">
                <h3>🧬 Blockchain & Financial Systems</h3>
                <p className="quote">"Immutable, decentralized, and intelligent—powering the future of digital finance."</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    <li>Ethereum, Smart Contracts (Solidity – Beginner Level)</li>
                    <li>Blockchain Use-Case Analysis</li>
                    <li>ML for Credit Scoring</li>
                    <li>Decentralized Loan Management Simulation</li>
                </ul>
                <p><strong>Scenic Sample:</strong> Seminar research showcased the integration of blockchain and ML to score loan applicants and manage lending transparency in multiscale fintech operations.</p>
            </div>

            {/* Teaching, Facilitation & Mentorship */}
            <div className="skills-section">
                <h3>🧑‍🏫 Teaching, Facilitation & Mentorship</h3>
                <p className="quote">"To teach is to learn twice—and ignite futures."</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    <li>Curriculum Design for Tech Education</li>
                    <li>Hands-on CBT Facilitation</li>
                    <li>Peer-Led Workshops & Tutorials</li>
                    <li>Multilevel Student Engagement (Beginner–Advanced)</li>
                </ul>
                <p><strong>Experience:</strong></p>
                <div className="experience-item">
                    <p>
                        <strong>Computer-Based Test (CBT) Facilitator</strong><br />
                        Oyo Township CBT Centres, Ajayi Crowther University & Atiba University, Oyo State<br />
                        <em>March & August 2024</em><br />
                        Facilitated digital literacy programs for 250+ secondary school students in Oyo State—introducing them to basic computing, online exams, and tech career paths.
                    </p>
                </div>
                <div className="experience-item">
                    <p>
                        <strong>Tutorial Instructor</strong><br />
                        Mother’spride Education Consult, Oye Ekiti, Nigeria<br />
                        <em>Mar. 2019 – Sep. 2019</em>
                    </p>
                    <div className="teaching-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Enrolment</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>CSC 101 – Introduction to Computing</td><td>400+</td><td>Sole Instructor</td></tr>
                                <tr><td>CSC 201 – Structured Programming (Python)</td><td>350+</td><td>Sole Instructor</td></tr>
                                <tr><td>CSC 208 – C++ Programming</td><td>100+</td><td>Sole Instructor</td></tr>
                                <tr><td>MTH 201 – Mathematical Models I</td><td>350+</td><td>Co-Instructor</td></tr>
                                <tr><td>MTH 205 – Linear Algebra I</td><td>100+</td><td>Special Topics</td></tr>
                                <tr><td>MTH 209 – Numerical Analysis</td><td>200+</td><td>Sole Instructor</td></tr>
                                <tr><td>PHY 207 – Electronic Circuit & Basics</td><td>200+</td><td>Special Topics</td></tr>
                                <tr><td>CSC 207 – Digital Computer Systems</td><td>75+</td><td>Sole Instructor</td></tr>
                                <tr><td>MTH 232 – Statistics for Engineering</td><td>400+</td><td>Special Topics</td></tr>
                                <tr><td>CSC 202 – Human-Computer Interaction</td><td>75+</td><td>Sole Instructor</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Tools & Technologies */}
            <div className="skills-section">
                <h3>🧰 Tools & Technologies</h3>
                <div className="tools-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Data Science</td><td>Jupyter, Google Colab, pandas, scikit-learn</td></tr>
                            <tr><td>AI/ML</td><td>TensorFlow, Keras, PyTorch, OpenCV</td></tr>
                            <tr><td>DevOps</td><td>Git, GitHub, Bash, Virtual Environments</td></tr>
                            <tr><td>Web</td><td>Django, Flask, Streamlit</td></tr>
                            <tr><td>Visualization</td><td>Matplotlib, Seaborn, Power BI (Beginner)</td></tr>
                            <tr><td>Database</td><td>SQLite, PostgreSQL (Basic)</td></tr>
                            <tr><td>Deployment</td><td>Heroku, GitHub Pages</td></tr>
                            <tr><td>Supply Chain</td><td>Tally ERP 9, Microsoft SAP</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Soft Skills & Leadership */}
            <div className="skills-section">
                <h3>🌟 Soft Skills & Leadership</h3>
                <p className="quote">"Leadership is about empowering others to achieve what they thought impossible."</p>
                <p><strong>Skills:</strong> Leadership, Team Collaboration, Effective Communication, Problem-Solving, Public Speaking, Project Management</p>
                <p><strong>Leadership Roles:</strong></p>
                <ul>
                    <li><strong>President, Give Back Initiative (A Special CDS)</strong>, Atiba LGA, Oyo State, 2024</li>
                    <li><strong>Corpers Liaison Officer</strong>, Ajayi Crowther University Corp Members, 2024</li>
                    <li><strong>Screening and Verification Chairman</strong>, Independent Federal University Oye Ekiti Student Union Government Electoral Commission, 2020/2021</li>
                    <li><strong>Chairman</strong>, Integrity and Advocate Youth Leadership Forum, Ekiti Chapter, 2021–2023</li>
                    <li><strong>Student Representing Computer Science (Honourable)</strong>, Student Representative Council, National Association of Science Students (NASS), FUOYE Chapter, 2019/2020</li>
                    <li><strong>Secretary General (Pioneer)</strong>, Nigeria University Engineering Student Association, OUI Chapter, 2016/2017</li>
                </ul>
            </div>
        </section>
    );
}

export default SkillsPage;