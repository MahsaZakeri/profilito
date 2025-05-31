import { experiences } from "../../constants/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import TimelineEntry from "./TimelineEntry/TimeLineEntry";
import "./ExperienceTimeline.css";

const ExperienceTimeline = () => {
  return (
    <section className="experience-timeline">
      <SectionTitle label="Experience" />
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <TimelineEntry key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;