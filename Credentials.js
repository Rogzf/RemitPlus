// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiwKnADjbwIf_VAIA8cgSq-go8LKN4qRs",
  authDomain: "remitplus-3d244.firebaseapp.com",
  projectId: "remitplus-3d244",
  storageBucket: "remitplus-3d244.appspot.com",
  messagingSenderId: "1006499280521",
  appId: "1:1006499280521:web:afe97580ee7002c1507858"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;