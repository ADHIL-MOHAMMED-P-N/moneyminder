/* import { createContext, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useUserAuth } from "./UserAuthContext";

const UserDetailsContext = createContext();
export function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({});
  const usersCollection = collection(db, "users");
  const { user } = useUserAuth();

  const addToUsers = async (newUser) => {
    await addDoc(usersCollection, newUser);
  };

  return (
    <UserDetailsContext.Provider value={{ addToUsers, userDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export default UserDetailsContext;
 */
