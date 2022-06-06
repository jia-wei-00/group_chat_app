// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7sOzC5lSgmSJN7MfNiYwZaFlKX9tT0s",
  authDomain: "chat-app-d4df0.firebaseapp.com",
  projectId: "chat-app-d4df0",
  storageBucket: "chat-app-d4df0.appspot.com",
  messagingSenderId: "890912858576",
  appId: "1:890912858576:web:8ff8a1401cd54d966559d5",
  measurementId: "G-YHGJCE9WQL",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
