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
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { useUserAuth } from "./UserAuthContext";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expense, setExpense] = useState([]); //for testing use dummy data in data folder
  const { user } = useUserAuth();
  /* {
    userId,
    date: "2023-10-14",
    name: "Grocery Shopping",
    amount: 50.0,
    description: "Purchased groceries for the week.",
  }, */

  //get all expense - realtime collection -firebase
  //onsnapshot does not return promise (no need of async await)
  const expenseColl = collection(db, "expense");
  const getAllExpense = () => {
    const q = query(expenseColl, where("userId", "==", user ? user.uid : "")); // query to take only logged in users data; to get all user's data remove where parameter ie (const q = query(expenseColl)).
    const unsub = onSnapshot(q, (snap) => {
      let expenseArr = [];
      snap.forEach((doc) => {
        expenseArr.push({ id: doc.id, ...doc.data() });
      });
      setExpense(expenseArr);
    });

    return () => unsub();
  };

  useEffect(() => {
    getAllExpense();
  }, [user]); //whene ever user changes run snap again(to filter data w.r.t user)
  //because onsnap only run in 2 condition 1. when data changes 2. initial render , so inorder to run whene ever user changes(login logout) we need to add it as dependancy

  //add expense
  const addToExpense = async (newExp) => {
    await addDoc(expenseColl, newExp);
    /*  setExpense((prev) => [...prev, newExp]); */ // since onsnapshot(getExpense) is looking for change in collection, no need to setExpense again because it will run twice and will add duplicate expense
  };

  //delete expense
  const deleteExpense = async (id) => {
    await deleteDoc(doc(db, "expense", id));
  };

  //edit expense

  const editExpense = async (id, newExp) => {
    await updateDoc(doc(db, "expense", id), newExp);
  };

  return (
    <ExpenseContext.Provider
      value={{ expense, addToExpense, deleteExpense, editExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
