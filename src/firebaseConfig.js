// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhk6dHA5RCILSRN18k8V-1SgsHT3xqQD8",
  authDomain: "linkedin-clone-95f59.firebaseapp.com",
  projectId: "linkedin-clone-95f59",
  storageBucket: "linkedin-clone-95f59.firebasestorage.app",
  messagingSenderId: "173342184377",
  appId: "1:173342184377:web:ce347fb81ba14f2eb85c68",
  measurementId: "G-DTK4G4B9TC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//export const analytics = getAnalytics(app);