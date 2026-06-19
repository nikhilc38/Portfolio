import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-wrapper">

        <div className="hero-container">

          {/* Left Content */}
          <div className="hero-content">

            <div className="tag">
              🚀 Available for Work
            </div>

            <h1>
              NIKHIL CHERUKURU
            </h1>

            <h2>Full Stack Developer</h2>

            <p>
              Building scalable web applications using React, Node.js,
              Express.js and MySQL. Passionate about creating modern,
              fast and beautiful user experiences.
            </p>

            <div className="buttons">
              <button className="primary-btn">
                Download Resume
              </button>

              <button className="secondary-btn">
                Contact Me
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="hero-image">

            <div className="glass-card">

              <div className="tech-card left-card">
                {"</>"}
                <p>Clean Code</p>
              </div>

              <img
                src="/image.png"
                alt="Nikhil"
              />

              <div className="tech-card right-card">
                🚀
                <p>Fast & Scalable</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;