// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADg8sIikzmu_vhopiB7MPw7vHrCzlEOig",
  authDomain: "paw-mart-69b8a.firebaseapp.com",
  projectId: "paw-mart-69b8a",
  storageBucket: "paw-mart-69b8a.firebasestorage.app",
  messagingSenderId: "51002981011",
  appId: "1:51002981011:web:dac1655164ea16bc91eb66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);