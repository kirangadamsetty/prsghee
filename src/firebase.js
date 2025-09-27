// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdQmHpvmSd53F4jlUDk2LB91oDnRLnY1g",
  authDomain: "prsghee-2776f.firebaseapp.com",
  projectId: "prsghee-2776f",
  storageBucket: "prsghee-2776f.firebasestorage.app",
  messagingSenderId: "51642334655",
  appId: "1:51642334655:web:b6bd33c385a4d217a1350a",
  measurementId: "G-42YS6056R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics (works only in browser, not SSR)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
