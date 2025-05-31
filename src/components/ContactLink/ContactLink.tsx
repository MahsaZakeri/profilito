import type { ContactLinkProps } from "../../models/contact";
import "./ContactLink.css";

const ContactLink = ({ href, label, icon: Icon }: ContactLinkProps) => {
  return (
    <a className="contact-link" href={href} target="_blank" rel="noreferrer">
      {Icon && <Icon size={18} />}
      {label}
    </a>
  );
};

export default ContactLink;
