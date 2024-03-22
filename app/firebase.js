// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2TGNXrCIqUUC4ck16nO2Xa-WfAVdA9Ws",
  authDomain: "expense-tracker-2bcb6.firebaseapp.com",
  projectId: "expense-tracker-2bcb6",
  storageBucket: "expense-tracker-2bcb6.appspot.com",
  messagingSenderId: "173739453119",
  appId: "1:173739453119:web:77d3c04a540707e47af40a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);