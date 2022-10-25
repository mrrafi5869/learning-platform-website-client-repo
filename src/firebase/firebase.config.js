// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZBL8AtQ8oOq7gHCwW5EGEPBCzBfhdgzI",
  authDomain: "learning-platform-websit-a1b26.firebaseapp.com",
  projectId: "learning-platform-websit-a1b26",
  storageBucket: "learning-platform-websit-a1b26.appspot.com",
  messagingSenderId: "1051562578542",
  appId: "1:1051562578542:web:d3f0be82d4cc5cea118c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;