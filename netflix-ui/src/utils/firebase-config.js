// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALSkvdsY4ZCjYZFv2XBuBmX59jC5V3r9A",
  authDomain: "react-netflix-clone-ea4a2.firebaseapp.com",
  projectId: "react-netflix-clone-ea4a2",
  storageBucket: "react-netflix-clone-ea4a2.appspot.com",
  messagingSenderId: "7270147793",
  appId: "1:7270147793:web:68c0aeb2a84765e19a47f0",
  measurementId: "G-DFWXDRVDMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)