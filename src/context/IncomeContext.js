import { createContext, useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
const IncomeContext = createContext();

export function IncomeProvider({ children }) {
  const [income, setIncome] = useState([]); //for testing use dummy data in data folder
  /*  {
    userId,
    date: "2023-06-02",
    name: "Stock Sale",
    amount: 800.0,
    description: "Sold stocks for profit.",
  } */

  //get all income - realtime collection -firebase
  //onsnapshot does not return promise (no need of async await)
  const incomeColl = collection(db, "income");
  const getAllIncome = () => {
    const q = query(incomeColl);
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
  }, []);

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
