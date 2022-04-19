// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAitcyhfb-lfA3MznextV4q4Qx8G10dj8c",
  authDomain: "world-gate-62156.firebaseapp.com",
  projectId: "world-gate-62156",
  storageBucket: "world-gate-62156.appspot.com",
  messagingSenderId: "235433134858",
  appId: "1:235433134858:web:fa5e5d589a06129ff588f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
