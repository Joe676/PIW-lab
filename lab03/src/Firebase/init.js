// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmqHs_vx-yaHxLINZI_AC8XeEjHGu6OzQ",
  authDomain: "piwo-react.firebaseapp.com",
  projectId: "piwo-react",
  storageBucket: "piwo-react.appspot.com",
  messagingSenderId: "193214159576",
  appId: "1:193214159576:web:13d15cf81e7ad6233b15ad",
  measurementId: "G-Q5CRREY8WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);