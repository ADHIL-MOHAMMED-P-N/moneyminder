import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
const UserAuthContext = createContext();

export const userAuthProvider = ({ children }) => {
    //signup with email and password
    const signup = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }


  return <UserAuthContext.Provider value={}>{children}</UserAuthContext.Provider>;
};

//custome hook to return userAuthContext 
//so by using this method we can avoid repition of using usecontext hook everywhere
export const useUserAuth =() => {
    return useContext(UserAuthContext)
}