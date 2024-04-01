import { createContext, useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  query,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useUserAuth } from "./UserAuthContext";
const IncomeContext = createContext();

export function IncomeProvider({ children }) {
  const { user } = useUserAuth();
  const [income, setIncome] = useState([]); //for testing use dummy data in data folder
  /*  {
    userId,
    date: "2023-06-02",
    name: "Stock Sale",
    amount: 800.0,
    description: "Sold stocks for profit.",
  } */

  //get all income - realtime collection -firebase (no need to set setstate on other operations like addtoincome,edit,delete)
  //onsnapshot does not return promise (no need of async await)
  const incomeColl = collection(db, "income");
  const getAllIncome = () => {
    const q = query(incomeColl, where("userId", "==", user ? user.uid : "")); // query to take only logged in users data; to get all user's data remove where parameter ie (const q = query(expenseColl))
    const unsub = onSnapshot(q, (snap) => {
      let incomeArr = [];
      snap.forEach((doc) => {
        incomeArr.push({ id: doc.id, ...doc.data() });
      });
      setIncome(incomeArr);
    });

    return () => unsub();
  };

  useEffect(() => {
    getAllIncome();
  }, [user]); //whene ever user changes run snap again(to filter data w.r.t user)
  //because onsnap only run in 2 condition 1. when data changes 2. initial render , so inorder to run whene ever user changes(login logout) we need to add it as dependancy

  //add income
  const addToIncome = async (newIncome) => {
    await addDoc(incomeColl, newIncome);
  };
  //delete income
  const deleteIncome = async (id) => {
    await deleteDoc(doc(db, "income", id));
  };

  //edit expense

  const editIncome = async (id, newIncome) => {
    await updateDoc(doc(db, "income", id), newIncome);
  };

  return (
    <IncomeContext.Provider
      value={{ income, addToIncome, deleteIncome, editIncome }}
    >
      {children}
    </IncomeContext.Provider>
  );
}

export default IncomeContext;
