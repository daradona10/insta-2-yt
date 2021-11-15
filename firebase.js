// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVH7HYqSsIZcydUlrAxUZClrws8EBQfoA",
  authDomain: "insta-2-yt-f6351.firebaseapp.com",
  projectId: "insta-2-yt-f6351",
  storageBucket: "insta-2-yt-f6351.appspot.com",
  messagingSenderId: "327379924525",
  appId: "1:327379924525:web:a2d5279605c26909fb6aa4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
