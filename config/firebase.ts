// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqtDqfebZqRSet4RRdpJv4sTnj2G4b-HI",
  authDomain: "blogging-first-firebase.firebaseapp.com",
  projectId: "blogging-first-firebase",
  storageBucket: "blogging-first-firebase.appspot.com",
  messagingSenderId: "176998313356",
  appId: "1:176998313356:web:ad0463215a99c48c4bbaa9",
  measurementId: "G-1QNB27HJ8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();