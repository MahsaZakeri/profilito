import "./SkillButton.css";

interface SkillButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

export const SkillButton = ({ label, onClick, active }: SkillButtonProps) => {
  return (
    <button className={`skill-button ${active ? "active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
};
