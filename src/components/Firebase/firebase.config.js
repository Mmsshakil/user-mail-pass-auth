// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOklAkiIqyHU0j-ous52CGT7XR9TyVbPA",
  authDomain: "user-email-pass-auth-bdee8.firebaseapp.com",
  projectId: "user-email-pass-auth-bdee8",
  storageBucket: "user-email-pass-auth-bdee8.appspot.com",
  messagingSenderId: "865357270591",
  appId: "1:865357270591:web:3b78dec37397bba303f28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;

const auth = getAuth(app);
export default auth;
