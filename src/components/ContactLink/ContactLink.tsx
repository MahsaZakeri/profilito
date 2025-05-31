import type { Contact } from "../../models/Contact";
import "./ContactLink.css";

const ContactLink = ({ href, label, icon: Icon }: Contact) => {
  return (
    <a className="contact-link" href={href} target="_blank" rel="noreferrer">
      {Icon && <Icon size={18} />}
      {label}
    </a>
  );
};

export default ContactLink;
