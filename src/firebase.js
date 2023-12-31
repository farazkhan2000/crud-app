import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9Z5XI5AeX-I_86dsytj9BPKe4wBx7nzM",
  authDomain: "crud-app-ec9dc.firebaseapp.com",
  projectId: "crud-app-ec9dc",
  storageBucket: "crud-app-ec9dc.appspot.com",
  messagingSenderId: "750452171739",
  appId: "1:750452171739:web:8ddb32e7c1d3c1bb3abdfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);