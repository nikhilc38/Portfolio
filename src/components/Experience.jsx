import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        <div className="experience-tag">
          💼 Experience
        </div>

        <h2>
          My Professional Journey
        </h2>

        <p className="experience-desc">
          My experience building modern web applications,
          learning industry practices and working on real-world projects.
        </p>

        <div className="timeline">

          <div className="experience-card">
            <div className="experience-year">
              2025 - Present
            </div>

            <h3>Software Developer Intern</h3>

            <h4>DB4Fresh Technologies</h4>

            <p>
              Working on full-stack web applications using
              React, Node.js, Express.js and MySQL.
              Developed admin dashboards, APIs,
              product management modules and UI improvements.
            </p>

            <div className="exp-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-year">
              2024 - 2025
            </div>

            <h3>Full Stack Development Training</h3>

            <h4>Self Learning & Projects</h4>

            <p>
              Built multiple full-stack applications,
              learned backend architecture,
              authentication systems,
              REST APIs and database design.
            </p>

            <div className="exp-tech">
              <span>JavaScript</span>
              <span>React</span>
              <span>REST API</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-year">
              2021 - 2025
            </div>

            <h3>B.Tech - Electronics & Communication</h3>

            <h4>Sri Venkateswara Engineering College</h4>

            <p>
              Graduated with strong fundamentals in
              programming, problem solving and software development.
              Completed IoT-based Smart Agriculture Monitoring Project.
            </p>

            <div className="exp-tech">
              <span>IoT</span>
              <span>Arduino</span>
              <span>Sensors</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;