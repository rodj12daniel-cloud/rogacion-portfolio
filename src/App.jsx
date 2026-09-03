import Silk from './Silk';
import './App.css';
import SkillsCarousel from './SkillsCarousel';
import resume from './assets/Resume.pdf';

function App() {
  return (
    <div className="portfolio">

      {/* Background */}
      <div className="background">
       <Silk
  speed={5}
  scale={1}
  color="#5227FF"
  noiseIntensity={1.5}
  rotation={0}
/>
      </div>

      {/* Navigation */}
      <nav className="dock">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

      {/* Hero */}
      <main className="hero">

        <p className="hero-small">
          HELLO, I'M
        </p>

        <h1>
          Rodj <span>Rogacion</span>
        </h1>

        <h2>
          Aspiring Web Developer | UI/UX Designer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-focused websites
          using clean code and thoughtful design.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

      </main>

   <SkillsCarousel />  

<section id="projects" className="projects">

  <p className="section-small">MY WORK</p>

  <h2>Featured Project</h2>

  <div className="project-card">

    <div className="project-info">
      <p className="project-number">01</p>

      <h3>Football 90</h3>

      <p>
        A modern football jersey e-commerce website featuring
        club and national team collections, World Cup products,
        product browsing, and a complete shopping experience.
      </p>

      <div className="project-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>PHP</span>
        <span>MySQL</span>
      </div>

      <a
        href="https://football90-three.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Live Site →
      </a>
    </div>

  </div>

</section>

<section id="contact" className="contact-section">

  <p className="section-small">GET IN TOUCH</p>

  <h2>Let's work together.</h2>

  <p className="contact-description">
    I'm currently open to opportunities in web development,
    frontend development, and UI/UX design.
  </p>

  <a
    href="mailto:rodj12daniel@gmail.com"
    className="contact-email"
  >
    rodj12daniel@gmail.com
  </a>

  <div className="contact-buttons">

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rodj12daniel@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-button"
>
  Email Me
</a>

    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="secondary-button"
    >
      View Resume
    </a>

  </div>

</section>



    </div>
  );
}

export default App;