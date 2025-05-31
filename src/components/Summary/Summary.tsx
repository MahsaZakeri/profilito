import { useSkill } from "../../context/SkillContext";
import SectionTitle from "../SectionTitle/SectionTitle";
import { summaryTextOne, summaryTextTwo } from "../../constants/constants";
import "./Summary.css";

const Summary = () => {
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
    <section className="summary">
      <div className="summary-inner">
        <SectionTitle label="Summary" />
        <p className="summary-text">{getHighlightedText(summaryTextOne)}</p>
        <p className="summary-text">{getHighlightedText(summaryTextTwo)}</p>
      </div>
    </section>
  );
};

export default Summary;
