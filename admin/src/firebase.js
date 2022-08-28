// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKtFSenQ_KxfMz0WLsdoFFiQJjwjIwBk8",
  authDomain: "shop-561ef.firebaseapp.com",
  projectId: "shop-561ef",
  storageBucket: "shop-561ef.appspot.com",
  messagingSenderId: "348458287449",
  appId: "1:348458287449:web:cfceac4fe54c0b74470c48"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app