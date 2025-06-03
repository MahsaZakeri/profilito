import { useSkill } from "../../context/SkillContext";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getSummary } from "../../services/getSummary";
import "./Summary.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const Summary = () => {
  const { selectedSkill } = useSkill();
  const [loading, setLoading] = useState(true);
  const [summaryTextOne, setSummaryTextOne] = useState("");
  const [summaryTextTwo, setSummaryTextTwo] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getSummary();
      if (data) {
        setSummaryTextOne(data.textOne || "");
        setSummaryTextTwo(data.textTwo || "");
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

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
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="summary">
          <div className="summary-inner">
            <SectionTitle label="Summary" />
            <p className="summary-text">{getHighlightedText(summaryTextOne)}</p>
            <p className="summary-text">{getHighlightedText(summaryTextTwo)}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Summary;
