import type { Experience } from "../../../models/Experience";
import { useSkill } from "../../../context/SkillContext";

interface Props {
  experience: Experience;
}

const TimelineContent = ({ experience }: Props) => {
  const { selectedSkill } = useSkill();

  const getHighlightedText = (text: string) => {
    if (!selectedSkill) return text;

    const regex = new RegExp(`(${selectedSkill})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === selectedSkill.toLowerCase() ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="timeline-right">
      <h3 className="job-title">{getHighlightedText(experience.title)}</h3>
      <span className="job-company">{getHighlightedText(experience.company)}</span>
      <span className="job-location">{getHighlightedText(experience.location)}</span>
      <p className="job-description">{getHighlightedText(experience.description)}</p>

      {experience.project && (
        <div className="job-project">
          <strong>Project:</strong>{" "}
          <a href={experience.project.link} target="_blank" rel="noopener noreferrer" className="job-project-link">
            {experience.project.name}
          </a>
        </div>
      )}

      <ul className="job-highlights">
        {experience.highlights.map((point, idx) => (
          <li key={idx}>{getHighlightedText(point)}</li>
        ))}
      </ul>

      <div className="job-tech">
        {experience.technologies.map((tech, idx) => (
          <span className="tech-badge" key={idx}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimelineContent;