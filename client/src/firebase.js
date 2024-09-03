// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-19518.firebaseapp.com",
  projectId: "mern-estate-19518",
  storageBucket: "mern-estate-19518.appspot.com",
  messagingSenderId: "807716912527",
  appId: "1:807716912527:web:f4e55f39a61cdbfe495ffa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);