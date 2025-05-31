import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SkillContext } from "../models/SkillContext";

const SkillContext = createContext<SkillContext | undefined>(undefined);

export const SkillProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return <SkillContext.Provider value={{ selectedSkill, setSelectedSkill }}>{children}</SkillContext.Provider>;
};

export const useSkill = (): SkillContext => {
  const context = useContext(SkillContext);
  if (!context) throw new Error("useSkill must be used within SkillProvider");
  return context;
};
