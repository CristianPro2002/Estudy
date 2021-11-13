
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMndZr19likQqrdBYIR7GpLdR0smWzQFw",
  authDomain: "estudiantes-f93a2.firebaseapp.com",
  databaseURL: "https://estudiantes-f93a2-default-rtdb.firebaseio.com",
  projectId: "estudiantes-f93a2",
  storageBucket: "estudiantes-f93a2.appspot.com",
  messagingSenderId: "399014363634",
  appId: "1:399014363634:web:e34c5538939ab417d46b6b",
  measurementId: "G-HFZKZW1853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);



export default db;