import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getSkills = async (): Promise<string[]> => {
  const docRef = doc(db, "skills", "skillsDoc");
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().list || [] : [];
};
