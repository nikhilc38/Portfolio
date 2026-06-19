import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-wrapper">

        <div className="about-content">

          <div className="about-tag">
            👨‍💻 About Me
          </div>

          <h2>
           Passionate Full Stack Developer
          </h2>

          <p>
            I'm Nikhil, a passionate Full Stack Developer focused on building
            modern, scalable, and user-friendly web applications. I enjoy
            transforming ideas into real-world digital solutions using
            React.js, Node.js, Express.js, and MySQL.
          </p>

          <p>
            I have experience developing responsive frontend interfaces,
            creating secure backend APIs, managing databases, and deploying
            complete web applications. I continuously explore new technologies
            and best practices to improve performance, security, and user
            experience.
          </p>

          <p>
            My current goal is to become an AI Full Stack Developer by combining
            modern web technologies with Artificial Intelligence, Machine
            Learning, and Cloud Computing.
          </p>
          

          <div className="about-cards">

            <div className="info-card">
              <h3>🚀 Projects</h3>
              <p>Built multiple full-stack applications and portfolio projects.</p>
            </div>

            <div className="info-card">
              <h3>💻 Tech Stack</h3>
              <p>React, JavaScript, Node.js, Express.js, MySQL, Git & GitHub.</p>
            </div>

            <div className="info-card">
              <h3>🎯 Goal</h3>
              <p>Become an AI Full Stack Developer and Cloud Engineer.</p>
            </div>

            <div className="info-card">
              <h3>📚 Learning</h3>
              <p>AI Integration, System Design, Docker, AWS and Microservices.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
