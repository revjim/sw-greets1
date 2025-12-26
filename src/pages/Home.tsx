import './Home.css';

export default function Home() {

  return (
    <div className="home">
      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="/sw-logo.png" alt="SW Logo" className="logo-large-image" />
          <h1 className="glitch-text">Steve White</h1>
          <div className="tagline">
            <span className="tag">Software Developer</span>
            <span className="separator">|</span>
            <span className="tag">Tech Enthusiast</span>
            <span className="separator">|</span>
            <span className="tag">Real Estate Investor</span>
          </div>
          <div className="cta-buttons">
            <a href="#projects" className="cta-button">View Projects</a>
            <a href="#contact" className="cta-button secondary">Contact</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to my corner of the digital universe. I'm a software developer
                passionate about building innovative solutions that shape the future.
              </p>
              <p>
                When I'm not coding, I'm exploring emerging technologies, managing real
                estate investments, and helping others achieve their dreams through my
                various projects.
              </p>
              <p>
                My mission is to leverage technology to empower individuals and create
                lasting value in both the digital and physical worlds.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-item pixel-border">
                <span className="skill-icon">{'</>'}</span>
                <span>Full Stack Dev</span>
              </div>
              <div className="skill-item pixel-border">
                <span className="skill-icon">🚀</span>
                <span>Innovation</span>
              </div>
              <div className="skill-item pixel-border">
                <span className="skill-icon">🏠</span>
                <span>Real Estate</span>
              </div>
              <div className="skill-item pixel-border">
                <span className="skill-icon">🤖</span>
                <span>AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">

            {/* Log Home People */}
            <div className="project-card pixel-border">
              <div className="project-header">
                <h3>Log Home People</h3>
                <span className="project-tag">Live Stream</span>
              </div>
              <p className="project-description">
                A weekly live stream supporting regular men and women who are building
                their own log homes from scratch. Empowering DIY builders with knowledge,
                community, and inspiration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Community</span>
                <span className="tech-tag">Education</span>
                <span className="tech-tag">DIY</span>
              </div>
              <a
                href="http://www.loghomepeople.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Site →
              </a>
            </div>

            {/* ZeroETV */}
            <div className="project-card pixel-border">
              <div className="project-header">
                <h3>ZeroETV</h3>
                <span className="project-tag">AI Service</span>
              </div>
              <p className="project-description">
                An innovative service for Amazon Vine members to reduce the estimated
                taxable value (ETV) of products received through Vine using AI-powered
                analysis and optimization.
              </p>
              <div className="project-tech">
                <span className="tech-tag">AI</span>
                <span className="tech-tag">Tax Tech</span>
                <span className="tech-tag">SaaS</span>
              </div>
              <a
                href="http://www.zeroetv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Site →
              </a>
            </div>

            {/* Blockover Corp */}
            <div className="project-card pixel-border">
              <div className="project-header">
                <h3>Blockover Corp</h3>
                <span className="project-tag">Holdings</span>
              </div>
              <p className="project-description">
                A management holding company that oversees diverse projects and real
                estate investments. Strategic portfolio management for sustainable growth
                and innovation.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Management</span>
                <span className="tech-tag">Real Estate</span>
                <span className="tech-tag">Investment</span>
              </div>
              <a
                href="http://www.blockover.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Site →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section newsletter">
        <div className="container">
          <div className="newsletter-box pixel-border">
            <h2>Get In Touch</h2>
            <p>
              Have a question or want to collaborate? Drop me an email and let's connect.
            </p>
            <a href="mailto:info@stevewhite.net" className="contact-email">
              info@stevewhite.net
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
