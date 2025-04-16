import React from 'react';

function EducationPage() {
    return (
        <section className="education">
            <h2>🎓 Education & Academic Journey</h2>

            {/* Academic Degrees */}
            <div className="education-section">
                <h3>Academic Degrees</h3>
                <div className="education-card">
                    <h4>🧠 Bachelor of Science in Computer Science</h4>
                    <p>
                        <strong>Federal University Oye-Ekiti (FUOYE), Ekiti State, Nigeria</strong><br />
                        <em>Second Class Honours - Upper Division | Jan. 2019 – May 2023</em><br />
                        <a href="https://www.fuoye.edu.ng" target="_blank" rel="noopener noreferrer">www.fuoye.edu.ng</a>
                    </p>
                    <p>Solidified academic mastery in core computing and mathematical sciences, excelling in:</p>
                    <ul>
                        <li><strong>Advanced Mathematics:</strong> Linear Algebra, Numerical Analysis, Calculus, Statistics, Mathematical Modelling</li>
                        <li><strong>Computer Science:</strong> Software Engineering, Machine Learning, Computer Vision, Operating Systems, AI, Data Structures & Algorithms</li>
                    </ul>
                    <p>Developed a strong reputation for explaining abstract mathematical and computational theories to peers. Passionate about the role of mathematics in shaping real-world technology applications—from AI models to digital systems design.</p>
                </div>
                <div className="education-card">
                    <h4>🛠 Transferred Studies in Computer Engineering</h4>
                    <p>
                        <strong>Oduduwa University, Ipetumodu, Osun State, Nigeria</strong><br />
                        <em>Mar. 2016 – May 2018</em><br />
                        <a href="https://www.oui.edu.ng" target="_blank" rel="noopener noreferrer">www.oui.edu.ng</a>
                    </p>
                    <p>Laid my foundational understanding in logic gates, electronics, basic programming, and computational mathematics. Achieved distinction-level grades before transferring to FUOYE to pursue a more research-intensive Computer Science path.</p>
                </div>
            </div>

            {/* Research Experience */}
            <div className="education-section">
                <h3>🔬 Research Experience</h3>
                <div className="education-card">
                    <h4>🧬 Brain Stroke Prediction in AI</h4>
                    <p>
                        <strong>Undergraduate Thesis | Jan. 2022 – Dec. 2022</strong><br />
                        Dr. Fagbuagun’s Lab, Department of Computer Science, FUOYE<br />
                        <em>Supervisor: Dr. O.A. Fagbuagun</em>
                    </p>
                    <p>Designed a predictive model using machine learning algorithms trained on patient datasets and text-based risk factors. Cleaned and analyzed real-world data for improved model accuracy. Compared algorithm performance and recommended the most efficient model. Delivered technical reports and mentored peers on deep learning concepts in healthcare.</p>
                </div>
                <div className="education-card">
                    <h4>🔗 Blockchain in Multiscale Loan Management Systems</h4>
                    <p>
                        <strong>Undergraduate Seminar | Jun. 2021 – Dec. 2021</strong><br />
                        Dr. Fagbuagun’s Lab, Department of Computer Science, FUOYE<br />
                        <em>Supervisors: Dr. O.A. Fagbuagun & Bature Joshua (PhD in view)</em>
                    </p>
                    <p>Explored blockchain integration for transparent, scalable loan systems. Analyzed the role of machine learning in credit scoring and automated decision systems. Produced academic seminar reports and assisted with peer tutorials.</p>
                </div>
                <div className="education-card">
                    <h4>🛡️ Artificial Immune System for Network Intrusion Detection</h4>
                    <p>
                        <strong>Software Research Project | Dec. 2020 – Apr. 2021</strong><br />
                        Dr. Ayogu’s Lab, Department of Computer Science, FUOYE<br />
                        <em>Supervisor: Dr. Mrs. B.A. Ayogu</em>
                    </p>
                    <p>Modeled immune-inspired detection techniques using B-cell and T-cell analogies. Simulated real-world intrusions using preprocessed network traffic datasets. Collaborated on literature reviews and co-developed documentation on intrusion detection frameworks.</p>
                </div>
            </div>

            {/* Teaching & Mentoring */}
            <div className="education-section">
                <h3>👨‍🏫 Teaching & Mentoring Experience</h3>
                <div className="education-card">
                    <h4>Computer-Based Test (CBT) Facilitator</h4>
                    <p>
                        <strong>Oyo Township CBT Centres, Ajayi Crowther University & Atiba University, Oyo State</strong><br />
                        <em>March & August 2024</em>
                    </p>
                    <p>Facilitated hands-on digital literacy and evaluation sessions for 250+ secondary school students.</p>
                </div>
                <div className="education-card">
                    <h4>Tutorial Instructor</h4>
                    <p>
                        <strong>Mother’spride Education Consult, Oye Ekiti, Nigeria</strong><br />
                        <em>Mar. 2019 – Sep. 2019</em>
                    </p>
                    <p>Taught and co-instructed undergraduate courses across math, computing, and electronics, including:</p>
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

            {/* Training & Certifications */}
            <div className="education-section">
                <h3>📈 Progressive Training & Certifications</h3>
                <p className="quote">"My learning journey is not confined to the classroom. I pursue knowledge relentlessly, both formally and informally."</p>
                <div className="education-card">
                    <h4>🧠 Stanbic IBTC Kubernetes Bootcamp (2024)</h4>
                    <p>One of a select few chosen nationwide for this highly competitive, fully funded training on DevOps and Cloud Infrastructure. Covered Kubernetes orchestration, CI/CD pipelines, container security, and production-grade deployment.</p>
                </div>
                <div className="education-card">
                    <h4>☁️ AWS Cloud Practitioner Essentials (2023)</h4>
                    <p>Learned foundational cloud architecture and service models, security, billing, and scalability with real-life AWS scenarios.</p>
                </div>
                <div className="education-card">
                    <h4>📊 Data Science & Machine Learning Specializations</h4>
                    <p>
                        <strong>Python for Data Science</strong> – FreeCodeCamp<br />
                        <strong>Machine Learning</strong> – Andrew Ng (Coursera)<br />
                        Applied core mathematics (derivatives, vectors, matrices, probability) to implement ML models from scratch and with Scikit-learn.
                    </p>
                </div>
                <div className="education-card">
                    <h4>🧮 Mathematics for Machine Learning</h4>
                    <p>Independently studied advanced Linear Algebra, Probability Theory, and Optimization Techniques to deepen my grasp of ML algorithms.</p>
                </div>
            </div>

            {/* Philosophy on Mathematics */}
            <div className="education-section philosophy">
                <h3>💡 Why Mathematics?</h3>
                <p>Mathematics is more than a subject—it’s the framework through which I understand and create. Whether I’m developing AI systems, optimizing logistics, or interpreting real-world data, mathematical logic, abstraction, and structure are my guiding tools.</p>
                <p className="quote">"In every equation, I see possibility. In every pattern, I see solutions."</p>
            </div>
        </section>
    );
}

export default EducationPage;