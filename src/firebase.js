// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbX4Jx66LYQwY_meDMoIM9oVH01fh9dGQ",
  authDomain: "todo-react-firebase-3a8e8.firebaseapp.com",
  projectId: "todo-react-firebase-3a8e8",
  storageBucket: "todo-react-firebase-3a8e8.appspot.com",
  messagingSenderId: "114238307867",
  appId: "1:114238307867:web:87d7d97b2a3641d97782be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };