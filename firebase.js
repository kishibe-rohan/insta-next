// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq6cVyZQiSeA6xDJMyCnLtZxMB1GH8ZPQ",
  authDomain: "instanext-806f2.firebaseapp.com",
  projectId: "instanext-806f2",
  storageBucket: "instanext-806f2.appspot.com",
  messagingSenderId: "78018656334",
  appId: "1:78018656334:web:ab93c9d23bbeb143ce2b1f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
