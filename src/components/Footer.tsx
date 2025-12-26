import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Steve White</h3>
          <p>Software Developer | Tech Enthusiast | Real Estate Investor</p>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Projects</h3>
          <div className="footer-links">
            <a href="http://www.loghomepeople.com" target="_blank" rel="noopener noreferrer">
              Log Home People
            </a>
            <a href="http://www.zeroetv.com" target="_blank" rel="noopener noreferrer">
              ZeroETV
            </a>
            <a href="http://www.blockover.com" target="_blank" rel="noopener noreferrer">
              Blockover Corp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Steve White. All rights reserved.</p>
        <p className="pixel-text">Built with React &amp; Retro Vibes</p>
      </div>
    </footer>
  );
}
