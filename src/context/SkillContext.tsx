import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface SkillContextType {
  selectedSkill: string | null;
  setSelectedSkill: (skill: string | null) => void;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const SkillProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return <SkillContext.Provider value={{ selectedSkill, setSelectedSkill }}>{children}</SkillContext.Provider>;
};

export const useSkill = (): SkillContextType => {
  const context = useContext(SkillContext);
  if (!context) throw new Error("useSkill must be used within SkillProvider");
  return context;
};
