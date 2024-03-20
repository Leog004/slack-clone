// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh-mg8Crt4xxAAMOzy-QLjV80lZxVXdRk",
  authDomain: "slack-clone-a15d2.firebaseapp.com",
  projectId: "slack-clone-a15d2",
  storageBucket: "slack-clone-a15d2.appspot.com",
  messagingSenderId: "475142608275",
  appId: "1:475142608275:web:3156de0a4889ab125cc466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, db, app };