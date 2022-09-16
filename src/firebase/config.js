// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu_8gJqIRBZt7cCHCNlvwKKeg9eVR0WRo",
  authDomain: "gamersmg-cfba5.firebaseapp.com",
  projectId: "gamersmg-cfba5",
  storageBucket: "gamersmg-cfba5.appspot.com",
  messagingSenderId: "350188728311",
  appId: "1:350188728311:web:4ce111c9f9328ff20fc8f2",
  measurementId: "G-1SN96SRMVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);