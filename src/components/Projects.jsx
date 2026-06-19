import "./Projects.css";
function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        <div className="projects-tag">
          🚀 Featured Projects
        </div>

        <h2>
          My Recent Work
        </h2>

        <p className="projects-desc">
          Some of the projects I've built using modern web technologies,
          focusing on performance, scalability and user experience.
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <h3>DB4Fresh Delivery App</h3>

            <p>
              Full-stack grocery delivery platform with admin panel,
              product management, orders and authentication.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
            </div>

            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              Modern glassmorphism portfolio with animations,
              responsive design and premium UI experience.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Smart Agriculture Monitoring</h3>

            <p>
              IoT-based agriculture monitoring system for soil,
              weather and crop health management.
            </p>

            <div className="project-tech">
              <span>IoT</span>
              <span>Arduino</span>
              <span>Sensors</span>
            </div>

            <button>View Project</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;