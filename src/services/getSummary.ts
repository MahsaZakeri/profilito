import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getSummary = async (): Promise<{ textOne: string; textTwo: string }> => {
  const docRef = doc(db, "summary", "summary-doc");
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as { textOne: string; textTwo: string }) : { textOne: "", textTwo: "" };
};
