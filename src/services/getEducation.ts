import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Education } from "../models/Education";

export const getEducation = async (): Promise<Education[]> => {
  const colRef = collection(db, "education");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => doc.data() as Education);
};
