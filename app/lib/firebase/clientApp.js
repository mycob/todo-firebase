// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvr-QyOL3SVc9IEhkc-qICUT83dsCRnA0",
  authDomain: "todo-firebase-19c22.firebaseapp.com",
  projectId: "todo-firebase-19c22",
  storageBucket: "todo-firebase-19c22.appspot.com",
  messagingSenderId: "841113620295",
  appId: "1:841113620295:web:92462662e58197ab640662",
  measurementId: "G-THD3C2XDJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, auth, db };