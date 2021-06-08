import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/FirebaseConfig";
import axios from "axios";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const response = await axios.get("http://localhost:5000/api/users");
      const result = response.data;
      const data = result.data;
      setCurrentUser(data.filter((dataUser) => user.email === dataUser.email)[0]);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
