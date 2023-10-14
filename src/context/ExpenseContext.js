import { createContext, useState } from "react";

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
      date: "2023-10-16",
      name: "Dinner with Friends",
      amount: 80.0,
      description: "Shared a meal with friends at a restaurant.",
    },
  ]);
  return (
    <ExpenseContext.Provider value={{ expense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
