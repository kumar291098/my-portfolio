// src/TestComponent.tsx
import React, { useEffect, useState } from 'react';
import { auth } from './firebaseConfig'; // Ensure firebaseConfig correctly initializes Firebase
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

const TestComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // Use Firebase `User` type

  // Monitor authentication state and update the user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("User object:", user); // Log user object for debugging
      setUser(user); // Update the state with the user object
    });
    
    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  // Handle Google login
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <h1>Firebase API Key Test</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName || 'User'}</p> {/* Use a fallback for displayName */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default TestComponent;
