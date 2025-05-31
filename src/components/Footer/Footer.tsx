import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-border" />
      <p className="footer-line">© {new Date().getFullYear()} Mahsa Zakari. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:mahsazakeri.dev@gmail.com" aria-label="Email">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/MahsaZakeri" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/mahsa-zakeri" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      <p className="footer-tagline">
        <span>✨</span> Built with care, powered by curiosity.
      </p>
    </footer>
  );
};

export default Footer;
