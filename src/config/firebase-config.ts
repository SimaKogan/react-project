// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5O1BV99A7Znu08HbXjjQqp8EmEnXyKZo",
  authDomain: "employees-953c7.firebaseapp.com",
  projectId: "employees-953c7",
  storageBucket: "employees-953c7.appspot.com",
  messagingSenderId: "579536706585",
  appId: "1:579536706585:web:48ad789640fd62a4d95e88",
  measurementId: "G-4QJFDBBMFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);