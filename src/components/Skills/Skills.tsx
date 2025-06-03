import { useEffect, useState } from "react";
import { useSkill } from "../../context/SkillContext";
import { SkillButton } from "./SkillButton/SkillButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getSkills } from "../../services/getSkills";
import Loader from "../Loader/Loader";
import "./Skills.css";

const Skills = () => {
  const { selectedSkill, setSelectedSkill } = useSkill();
  const [skills, setSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      setSkills(data);
      setLoading(false);
    };
    fetchSkills();
  }, []);

  const handleClick = (skill: string) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="skills">
          <div className="skills-inner">
            <SectionTitle label="Skills" />
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillButton key={skill} label={skill} active={selectedSkill === skill} onClick={() => handleClick(skill)} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Skills;
