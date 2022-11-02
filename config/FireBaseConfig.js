import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmPgiGawpBoQ61LitMvKhXz1mHziwjbzI",
  authDomain: "healthify-1dd16.firebaseapp.com",
  projectId: "healthify-1dd16",
  storageBucket: "healthify-1dd16.appspot.com",
  messagingSenderId: "29920127961",
  appId: "1:29920127961:web:44eeba8e5bdeb9ecb2c7c8",
  measurementId: "G-TB51NWFV5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);