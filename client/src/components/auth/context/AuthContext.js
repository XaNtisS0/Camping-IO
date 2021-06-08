import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/FirebaseConfig";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then(
          (result) => {
            setCurrentUser(result.data.filter((resUser) => resUser.email === user.email)[0]);
            setLoading(false);
          },
          (error) => {
            console.log(error);
          },
        );
      // setCurrentUser(user);
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
