import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section">

      <div className="education-container">

        <div className="education-tag">
          🎓 Education
        </div>

        <h2>
          Academic Journey
        </h2>

        <p className="education-desc">
          My educational background and learning journey that helped
          shape my foundation in technology and software development.
        </p>

        <div className="education-timeline">

          <div className="education-card">

            <div className="education-year">
              2021 - 2025
            </div>

            <h3>
              B.Tech - Electronics & Communication Engineering
            </h3>

            <h4>
              Sri Venkateswara Engineering College
            </h4>

            <p>
              Built a strong foundation in programming,
              software development and problem solving.
              Completed IoT-based projects and explored
              modern web technologies.
            </p>

          </div>

          <div className="education-card">

            <div className="education-year">
              2019 - 2021
            </div>

            <h3>
              Intermediate Education
            </h3>

            <h4>
              Narayana Junior College
            </h4>

            <p>
              Focused on Mathematics, Physics and Chemistry,
              building analytical and logical thinking skills.
            </p>

          </div>

          <div className="education-card">

            <div className="education-year">
              2018 - 2019
            </div>

            <h3>
              Secondary School Education (SSC)
            </h3>

            <h4>
              State Board
            </h4>

            <p>
              Developed fundamental academic knowledge and
              interest in technology and computers.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;