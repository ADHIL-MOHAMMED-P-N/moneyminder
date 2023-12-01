import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  //signup with email and password
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //signin with email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    return signOut(auth);
  };
  //checking auth changes and setting the user
  useEffect(() => {
    //only listen to this on mounting a component
    //no need to listen to this function whenever a component is unmounted , so need to cleanup.
    const unsubscribte = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribte(); //cleanup
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ signUp, logIn, user, logOut }}>
      {children}
    </UserAuthContext.Provider>
  );
};

//custome hook to return userAuthContext
//so by using this method we can avoid repition of using usecontext hook everywhere
export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
