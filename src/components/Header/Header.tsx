import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactLink from "../ContactLink/ContactLink";
import profileImage from "../../assets/profile.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={profileImage} alt="Mahsa Zakari" className="profile-pic" loading="eager" />
      <div className="header-content" role="banner">
        <h1 className="name">Mahsa Zakari</h1>
        <p className="title">Senior Frontend Software Engineer</p>

        <nav className="links" aria-label="Contact links">
          <ContactLink href="mailto:mahsazakeri.dev@gmail.com" label="Email" icon={FaEnvelope} />
          <ContactLink href="https://github.com/MahsaZakeri" label="GitHub" icon={FaGithub} />
          <ContactLink href="https://linkedin.com/in/mahsa-zakeri" label="LinkedIn" icon={FaLinkedin} />
          <ContactLink href="https://wa.me/989352930991" label="WhatsApp" icon={FaWhatsapp} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
