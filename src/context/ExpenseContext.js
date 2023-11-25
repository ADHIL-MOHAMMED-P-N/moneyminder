import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expense, setExpense] = useState([
    {
      date: "2023-10-14",
      name: "Grocery Shopping",
      amount: 50.0,
      description: "Purchased groceries for the week.",
    },
    {
      date: "2023-10-14",
      name: "Haircut",
      amount: 20.0,
      description: "Purchased groceries for the week.",
    },
    {
      date: "2023-02-15",
      name: "Gasoline",
      amount: 40.0,
      description: "Filled up the car's gas tank.",
    },

    {
      date: "2023-05-21",
      name: "Dinner with Mother",
      amount: 50.0,
      description: "Shared a meal with friends at a restaurant.",
    },
    {
      date: "2023-02-16",
      name: "Dinner with Girlfriend",
      amount: 100.0,
      description: "Shared a meal with GF.",
    },
    {
      date: "2023-10-16",
      name: "Dinner with Boss",
      amount: 200.0,
      description: "Shared a meal with boss.",
    },
    {
      date: "2023-11-01",
      name: "Lunch",
      amount: 50.0,
      description: "Lunch",
    },
  ]);

  //get expense - firebase
  const getExpense = () => {
    const q = query(collection(db, "expense"));
    const unsub = onSnapshot(q, (snap) => {
      let expenseArr = [];
      snap.forEach((doc) => {
        expenseArr.push(doc.data());
      });
      setExpense(expenseArr);
    });
    console.log(expense);
    return () => unsub();
  };

  useEffect(() => {
    getExpense();
  }, []);

  const addToExpense = (newExp) => {
    setExpense((prev) => [...prev, newExp]);
  };
  return (
    <ExpenseContext.Provider value={{ expense, addToExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
