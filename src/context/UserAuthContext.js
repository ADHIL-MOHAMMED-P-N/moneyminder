import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user") === null
      ? null
      : JSON.parse(localStorage.getItem("user"))
  ); //change this to coockie later, localstorage is not secure
  //signup with email and password

  //signup
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //login with email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //forgotpassword functionality

  //login with google
  const googleLogin = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
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
      localStorage.setItem("user", JSON.stringify(currentUser)); // otherwise on refresh will loose the user(so set the user from localstoreage and initilalize on render in usestate above)
    });
    return () => {
      unsubscribte(); //cleanup
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ signUp, logIn, user, logOut, googleLogin }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

//custome hook to return userAuthContext
//so by using this method we can avoid repition of using usecontext hook everywhere
export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
