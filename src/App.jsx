import { useState } from "react";
import "./App.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaMoon,
  FaSun,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <span className="logo-dot"></span>
            &lt;HJ /&gt;
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="connect-button">
            Let's connect →
          </a>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      <main>

        {/* ================= HOME ================= */}

        <section id="home" className="hero-section">
          <div className="hero-grid">

            {/* Left */}
            <div className="hero-left">
              <p className="hero-small">MOHAMMAD HUSSAIN SOHIL JINABADE</p>

              <h1>HUSSAIN</h1>

              <div className="hero-socials">
                <a
                  href="https://www.linkedin.com/in/mohammad-hussain-52056738a"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/HussainJinabade"
                  target="_blank"
                  rel="noreferrer"
                  araia-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="hero-photo-wrapper">
              <div className="hero-photo">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Mohammad Hussain Sohil Jinabade"
                />
              </div>

              <div className="availability">
                <span></span>
                Available for opportunities
              </div>
            </div>

            {/* Right */}
            <div className="hero-right">
              <p className="hero-role-label">FRONTEND</p>

              <h2>DEVELOPER</h2>

              <p>
                I build responsive, modern and user-focused web applications
                using React, JavaScript and modern web technologies.
              </p>
            </div>

          </div>
        </section>

        {/* Resume */}
        <section className="resume-section">
          <p className="section-label">// resume</p>

          <a
            href={`${import.meta.env.BASE_URL}resume/Hussain_CV.pdf`}
            download="Hussain_CV.pdf"
            className="resume-button"
          >
            Download Resume ↓
          </a>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">
          <div className="section-heading">

            <div>
              <p className="section-label">// about</p>

              <h2>
                About
                <br />
                ME
              </h2>
            </div>

            <p className="section-side-text">
              A frontend developer who enjoys turning ideas into
              clean and practical web applications.
            </p>

          </div>

          <div className="about-grid">

            <div className="about-text">

              <p>
                Hi, I'm Mohammad Hussain Sohil Jinabade, a Frontend Developer
                passionate about building clean, responsive and user-focused
                web applications.
              </p>

              <p>
                I have completed my MCA and have hands-on experience with
                React.js, JavaScript, HTML and CSS. I enjoy turning ideas
                into functional and easy-to-use web experiences.
              </p>

              <p>
                I also have experience working with Python, Java, C, MySQL
                and SQL, and I continue improving my development skills
                through practical projects.
              </p>

            </div>

            <div className="tech-card">

              <p className="tech-card-title">
                tech stack
              </p>

              <div className="tech-grid">
                <span>
                  <FaHtml5 />
                  HTML
                </span>

                <span>
                  <FaCss3Alt />
                  CSS
                </span>

                <span>
                  <FaJs />
                  JavaScript
                </span>

                <span>
                  <FaReact />
                  React.js
                </span>

                <span>
                  <SiTailwindcss />
                  Tailwind CSS
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-heading">

            <div>
              <p className="section-label">
                // experience
              </p>

              <h2>
                Where I've
                <br />
                worked
              </h2>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-left">
              <div className="experience-date">
                FEB 2026 — JUN 2026
              </div>

              <img
                className="company-logo"
                src={`${import.meta.env.BASE_URL}images/edutainer-logo.png`}
                alt="Edutainer logo"
              />
            </div>

            <div className="experience-content">
              <h3>Web Development Intern</h3>

              <h4>Edutainer-PAT Technologies Pvt. Ltd.</h4>

              <ul>
                <li>
                  Worked on practical web development projects using HTML,
                  CSS, JavaScript and React.
                </li>

                <li>
                  Developed responsive web interfaces and focused on creating
                  clean and user-friendly experiences.
                </li>

                <li>
                  Gained hands-on experience with frontend development,
                  PHP, MySQL and Python through practical tasks.
                </li>
              </ul>
            </div>
          </div>

          {/* CODSOFT */}

          <div className="experience-item">
            <div className="experience-left">
              <div className="experience-date">
                20 SEP 2026 — 20 OCT 2026
              </div>

              <img
                className="company-logo"
                src={`${import.meta.env.BASE_URL}images/codsoft-logo.png`}
                alt="CodSoft logo"
              />
            </div>

            <div className="experience-content">
              <h3>Full-Stack Web Development Intern</h3>

              <h4>CodSoft</h4>

              <ul>
                <li>
                  Selected for a Full-Stack Web Development internship at CodSoft.
                </li>

                <li>
                  Worked on practical web development tasks and project
                  implementations during the internship.
                </li>

                <li>
                  Gained hands-on experience through assigned development projects.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-left">
              <p className="experience-date">
                02 OCT 2026 — 02 NOV 2026
              </p>

              <img
                src={`${import.meta.env.BASE_URL}images/auspify-logo.png`}
                alt="Auspify Technologies"
                className="company-logo"
              />
            </div>

            <div className="experience-content">
              <h3>Front End Development Intern</h3>
              <h4>Auspify Technologies</h4>

              <ul>
                <li>
                  Selected for a Front End Development internship at Auspify Technologies.
                </li>

                <li>
                  Working on practical frontend development tasks and project implementations.
                </li>

                <li>
                  Gaining hands-on experience with modern web development technologies.
                </li>
              </ul>
            </div>
          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-heading">

            <div>
              <p className="section-label">
                // work
              </p>

              <h2>
                Projects
              </h2>
            </div>

            <p className="section-side-text">
              Built applications to solve practical problems.
            </p>

          </div>

          {/* ================= REVUP ================= */}

          <article className="project-item">

            <div className="project-image">

              <img
                src={`${import.meta.env.BASE_URL}images/Home-Page.jpg`}
                alt="RevUp BMW Sales Dashboard"
              />

              <div className="project-image-label">
                revup /
              </div>

            </div>

            <div className="project-info">

              <p className="project-category">
                01 / DATA & MACHINE LEARNING
              </p>

              <h3>
                RevUp
              </h3>

              <h4>
                BMW Sales Forecasting & Visualization
              </h4>

              <p>
                A data-driven BMW sales analytics and forecasting application
                designed to analyze sales trends, visualize historical data
                and provide sales predictions through an interactive web
                interface.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Django</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
                <span>Matplotlib</span>
              </div>

              <div className="project-links">

                <a
                  href="https://github.com/HussainJinabade/BmwSalesPrediction"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="#"
                  className="coming-soon"
                  onClick={(event) => event.preventDefault()}
                >
                </a>

              </div>

            </div>

          </article>

          {/* ================= EXPENSE TRACKER ================= */}

          <article className="project-item reverse">

            <div className="project-image">

              <img
                src={`${import.meta.env.BASE_URL}images/First-Page.png`}
                alt="Expense Tracker Dashboard"
              />

              <div className="project-image-label">
                expense-tracker /
              </div>

            </div>

            <div className="project-info">

              <p className="project-category">
                02 / PERSONAL FINANCE
              </p>

              <h3>
                Expense Tracker
              </h3>

              <h4>
                Financial Forecast Dashboard
              </h4>

              <p>
                A responsive personal finance application for managing income,
                expenses and upcoming bills, with transaction management,
                spending analysis and financial forecasting.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Local Storage</span>
                <span>Canvas API</span>
              </div>

              <div className="project-links">

                <a
                  href="https://github.com/HussainJinabade/Expenses-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://hussainjinabade.github.io/Expenses-Tracker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>

              </div>

            </div>

          </article>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-box">

            <p className="section-label">
              // get in touch
            </p>

            <h2>
              Let's work
              <br />
              Together.
            </h2>

            <p>
              Open to frontend developer opportunities and interesting
              projects. Let's build something useful together.
            </p>

            <div className="contact-links">

              <a href="mailto:hussainjinabade65@gmail.com">
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-hussain-52056738a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/HussainJinabade"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>

            <p className="footer-name">
              &lt;Mohammad Hussain Sohil Jinabade /&gt;
            </p>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;