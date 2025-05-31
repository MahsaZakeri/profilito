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
          <ContactLink href="mailto:mahsa@example.com" label="Email" />
          <ContactLink href="https://github.com/yourusername" label="GitHub" />
          <ContactLink href="https://linkedin.com/in/yourusername" label="LinkedIn" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
