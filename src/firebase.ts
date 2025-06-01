import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaeHAF-QcV3dU7ZIrs8Y2Dd8WtRcvE1DM",
  authDomain: "profilito-data.firebaseapp.com",
  projectId: "profilito-data",
  storageBucket: "profilito-data.firebasestorage.app",
  messagingSenderId: "985792119694",
  appId: "1:985792119694:web:fe6320e4445ed09fcb5adf",
  measurementId: "G-J88LTHLXNB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
