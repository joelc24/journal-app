// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEyvd3OXoVCkS-gt5zEBI6zU2prUmJA7w",
  authDomain: "journal-app-ce7e9.firebaseapp.com",
  projectId: "journal-app-ce7e9",
  storageBucket: "journal-app-ce7e9.appspot.com",
  messagingSenderId: "576218619911",
  appId: "1:576218619911:web:6ed24cf390c5a9f7100aa2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)