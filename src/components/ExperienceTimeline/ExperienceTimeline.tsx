import SectionTitle from "../SectionTitle/SectionTitle";
import TimelineEntry from "./TimelineEntry/TimeLineEntry";
import "./ExperienceTimeline.css";
import { useEffect, useState } from "react";
import { getExperiences } from "../../services/getExperiences";
import type { Experience } from "../../models/Experience";
import Loader from "../Loader/Loader";

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getExperiences();
      setExperiences(data);
      setLoading(false);
    };
    fetchExperiences();
  }, []);

  return (
    <section className="experience-timeline">
      <SectionTitle label="Experience" />
      <div className="timeline-wrapper">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="timeline-line" />
            <div className="timeline-container">
              {experiences.map((exp, index) => (
                <TimelineEntry key={index} experience={exp} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ExperienceTimeline;