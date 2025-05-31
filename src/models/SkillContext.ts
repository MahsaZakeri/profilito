export interface SkillContext {
  selectedSkill: string | null;
  setSelectedSkill: (skill: string | null) => void;
}
