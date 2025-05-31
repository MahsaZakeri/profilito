import SectionTitle from "../SectionTitle/SectionTitle";
import "./Education.css";
import { education } from "../../constants/constants";

const EducationCard = () => {
  return (
    <section className="education">
      <SectionTitle label="Education" />
      {education.map((edu, index) => (
        <div className="education-card" key={index}>
          <span className="education-school">
            <a href={edu.website} target="_blank" rel="noopener noreferrer">
              {edu.school}
            </a>
          </span>
          <span className="education-date">{edu.date}</span>
          <p className="education-degree">
            {edu.degree} – {edu.program}
          </p>
          <ul className="education-highlights">
            {edu.highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EducationCard;
