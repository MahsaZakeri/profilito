import type { ContactLinkProps } from "../../models/contact";

const ContactLink = ({ href, label }: ContactLinkProps) => {
  return (
    <a className="contact-link" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
};

export default ContactLink;