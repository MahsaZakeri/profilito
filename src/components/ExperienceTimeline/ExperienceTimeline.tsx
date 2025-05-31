import { experiences } from "../../constants/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ExperienceTimeline.css";

const ExperienceTimeline = () => {
  return (
    <section className="experience-timeline">
      <SectionTitle label="Experience" />

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div className="timeline-entry" key={index}>
              <div className="timeline-left">
                <span className="timeline-date">{exp.date}</span>
              </div>

              <div className="timeline-divider">
                <div className="timeline-dot" />
              </div>

              <div className="timeline-right">
                <h3 className="job-title">{exp.title}</h3>
                <p className="job-company">{exp.company}</p>
                <p className="job-location">{exp.location}</p>
                <p className="job-description">{exp.description}</p>
                <ul className="job-highlights">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="job-tech">
                  {exp.technologies.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
