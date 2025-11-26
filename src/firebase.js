// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzwxpAjnG5jKSsKPw5LuVm2W_aXGN5gOs",
  authDomain: "portfolio-8421e.firebaseapp.com",
  projectId: "portfolio-8421e",
  storageBucket: "portfolio-8421e.firebasestorage.app",
  messagingSenderId: "995985846482",
  appId: "1:995985846482:web:66dd6c109b95489b88bd0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;
