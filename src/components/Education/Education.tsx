import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import type { Education } from "../../models/Education";
import { getEducation } from "../../services/getEducation";
import "./Education.css";

const EducationCard = () => {
  const [educationData, setEducationData] = useState<Education[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEducation();
      setEducationData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="education">
      {educationData.map((edu, index) => (
        <div className="education-card" key={index}>
          <SectionTitle label="Education" />
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
