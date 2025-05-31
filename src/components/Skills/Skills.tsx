import { useSkill } from "../../context/SkillContext";
import { SkillButton } from "./SkillButton/SkillButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import { skills } from "../../constants/constants";
import "./Skills.css";

const Skills = () => {
  const { selectedSkill, setSelectedSkill } = useSkill();

  const handleClick = (skill: string) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <section className="skills">
      <div className="skills-inner">
        <SectionTitle label="Skills"></SectionTitle>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillButton key={skill} label={skill} active={selectedSkill === skill} onClick={() => handleClick(skill)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
