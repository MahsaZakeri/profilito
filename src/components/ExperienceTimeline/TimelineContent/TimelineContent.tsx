import type { Experience } from "../../../models/Experience";

interface Props {
  experience: Experience;
}

const TimelineContent = ({ experience }: Props) => {
  return (
    <div className="timeline-right">
      <h3 className="job-title">{experience.title}</h3>
      <span className="job-company">{experience.company}</span>
      <span className="job-location">{experience.location}</span>
      <p className="job-description">{experience.description}</p>
      <ul className="job-highlights">
        {experience.highlights.map((point, idx) => (
          <li key={idx}>{point}</li>
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
