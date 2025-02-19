// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoL38hhrOAYcCAAOO4YqsqWeDd18W_ow8",
  authDomain: "trip-planner-ba963.firebaseapp.com",
  projectId: "trip-planner-ba963",
  storageBucket: "trip-planner-ba963.firebasestorage.app",
  messagingSenderId: "482152011660",
  appId: "1:482152011660:web:4ff5ee1984e0a27d0b68a9",
  measurementId: "G-C76ZQSS3VG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);