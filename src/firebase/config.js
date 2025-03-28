// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv8IGkuayljnB0Wi2hE66QQ27s1FJ2Yf0",
  authDomain: "react-cursos-8fa98.firebaseapp.com",
  projectId: "react-cursos-8fa98",
  storageBucket: "react-cursos-8fa98.firebasestorage.app",
  messagingSenderId: "537271743867",
  appId: "1:537271743867:web:5b01343286db67604c39de"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )