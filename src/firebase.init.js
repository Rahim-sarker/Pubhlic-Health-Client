// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF8Gs_UseQal9pw0xL6BTxHGIea0OOytY",
  authDomain: "hello-doctor-ea81e.firebaseapp.com",
  projectId: "hello-doctor-ea81e",
  storageBucket: "hello-doctor-ea81e.appspot.com",
  messagingSenderId: "645290437411",
  appId: "1:645290437411:web:3c627bf9503e36d4273a96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
