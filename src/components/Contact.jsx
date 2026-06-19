import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <div className="contact-tag">
          📩 Contact Me
        </div>

        <h2>
          Let's Work Together
        </h2>

        <p className="contact-desc">
          Have a project idea, job opportunity, or just want to connect?
          Feel free to reach out. I'm always open to discussing new
          opportunities and exciting projects.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>nikhilcherukuru45@gmail.com</p>
          </div>

          <div className="contact-card">
            <span>📱</span>
            <h3>Phone</h3>
            <p>+91 6301515489 </p>
          </div>

          <div className="contact-card">
            <span>💼</span>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/nikhil</p>
          </div>

          <div className="contact-card">
            <span>💻</span>
            <h3>GitHub</h3>
            <p>github.com/nikhil</p>
          </div>

        </div>

        <button className="contact-btn">
          Let's Talk
        </button>

      </div>

    </section>
  );
}

export default Contact;