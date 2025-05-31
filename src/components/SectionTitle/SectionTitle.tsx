import type { Title } from "../../models/Title";
import "./SectionTitle.css";

const SectionTitle = ({ label }: Title) => {
  return <p className="section-title">{label}</p>;
};

export default SectionTitle;
