import { collection, getDocs } from "firebase/firestore";
import type { Experience } from "../models/Experience";
import { db } from "../firebase";

export const getExperiences = async (): Promise<Experience[]> => {
  const colRef = collection(db, "experiences");
  const snapshot = await getDocs(colRef);

  const data = snapshot.docs.map((doc) => doc.data() as Experience);
  return data.sort((a, b) => {
    const getStartYear = (date: string) => {
      const match = date.match(/(\w+)\s(\d{4})/);
      return match ? new Date(match[0]).getTime() : 0;
    };

    return getStartYear(b.date) - getStartYear(a.date);
  });
};
