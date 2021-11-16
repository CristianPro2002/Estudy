import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;