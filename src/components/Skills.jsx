import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-wrapper">

        <div className="skills-container">

          <div className="skills-title">
            <span>⚡ Skills & Technologies</span>

            <h2>My Technical Expertise</h2>

            <p>
              Technologies and tools I use to build modern,
              scalable and high-performance web applications.
            </p>
          </div>

          <div className="skills-grid">

            <div className="skills-card">
              <h3>Frontend</h3>

              <div className="skill-chip">HTML5</div>
              <div className="skill-chip">CSS3</div>
              <div className="skill-chip">JavaScript</div>
              <div className="skill-chip">React.js</div>
              <div className="skill-chip">Redux</div>
            </div>

            <div className="skills-card">
              <h3>Backend</h3>

              <div className="skill-chip">Node.js</div>
              <div className="skill-chip">Express.js</div>
              <div className="skill-chip">REST APIs</div>
              <div className="skill-chip">JWT</div>
            </div>

            <div className="skills-card">
              <h3>Database</h3>

              <div className="skill-chip">MySQL</div>
              <div className="skill-chip">MongoDB</div>
            </div>

            <div className="skills-card">
              <h3>Tools</h3>

              <div className="skill-chip">Git</div>
              <div className="skill-chip">GitHub</div>
              <div className="skill-chip">VS Code</div>
              <div className="skill-chip">Postman</div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;