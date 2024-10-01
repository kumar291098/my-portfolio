// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSz6fys5zJi6a1pSctotTfA9mICz9AK6s",
  authDomain: "authenticationemail-8bb50.firebaseapp.com",
  projectId: "authenticationemail-8bb50",
  storageBucket: "authenticationemail-8bb50.appspot.com",
  messagingSenderId: "810504671865",
  appId: "1:810504671865:web:9309d72f4eef1c2eaf7aa8",
  measurementId: "G-FGXCZ1XXHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app); // Initialize Firebase Auth

// Optionally export the auth object if you need it in other parts of your application
export { auth };
export default app; // Export the initialized app if needed
