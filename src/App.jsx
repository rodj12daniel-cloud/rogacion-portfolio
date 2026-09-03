import AeroShards from './AeroShards';
import './App.css';

function App() {
  return (
    <div className="portfolio">

      {/* Background */}
      <div className="background">
        <AeroShards
    backgroundColor="#120F17"
    shardColor="#795db0"
    accentColor="#614180"
    placement="center"
    flow="ribbon"
    material="pearl"
    detail="balanced"
    effect="none"
    scale={1}
    spread={1}
    depth={1}
    speed={1}
    spin={1}
    interaction="repel"
    density={1.5}
    shardSize={1.1}
    stretch={1}
    turbulence={1}
    glow={1}
    edgeSoftness={2}
    bloom={0.5}
    grain={0.05}
    chromaticAberration={0.0075}
    transitionDuration={1}
    interactionRadius={1.5}
    interactionStrength={0.5}
    rippleIntensity={1}
    holdToGather
    paused={false}
        />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">RODJ.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
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



    </div>
  );
}

export default App;