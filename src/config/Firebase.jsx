// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe7UsCXyVm4_tctZQKlN-IEyLM0UsBdKQ",
  authDomain: "kankerpydara.firebaseapp.com",
  projectId: "kankerpydara",
  storageBucket: "kankerpydara.appspot.com",
  messagingSenderId: "854496809740",
  appId: "1:854496809740:web:89d86ac153b60490cdaf29",
  measurementId: "G-2H4ZQC10X9",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const firebaseauthentication = initializeApp.auth();