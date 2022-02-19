// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO3y7RvXroBGHAwKCY7N-mMrCaJmAn3Bc",
  authDomain: "jinportfolio-30ee8.firebaseapp.com",
  projectId: "jinportfolio-30ee8",
  storageBucket: "jinportfolio-30ee8.appspot.com",
  messagingSenderId: "862227373752",
  appId: "1:862227373752:web:32a2d010af3e8a89391e4d",
  measurementId: "G-VVLBJ798MC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbService = getFirestore(app);

export { dbService };
