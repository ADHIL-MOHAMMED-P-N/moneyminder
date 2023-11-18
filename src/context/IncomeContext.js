import { createContext, useState } from "react";

const IncomeContext = createContext();

export function IncomeProvider({ children }) {
  const [income, setIncome] = useState([
    {
      date: "2023-06-02",
      name: "Stock Sale",
      amount: 800.0,
      description: "Sold stocks for profit.",
    },
    {
      date: "2023-07-10",
      name: "Consulting Fee",
      amount: 400.0,
      description: "Received consulting fee for services.",
    },
    {
      date: "2023-08-15",
      name: "Online Sales",
      amount: 350.0,
      description: "Income from online sales.",
    },
    {
      date: "2023-10-21",
      name: "Gift Money",
      amount: 100.0,
      description: "Received money as a gift.",
    },
    {
      date: "2023-10-30",
      name: "Refund",
      amount: 75.0,
      description: "Received a refund for a purchase.",
    },
    {
      date: "2023-02-11",
      name: "Freelance",
      amount: 400,
      description: "Web development work",
    },
    {
      date: "2023-11-11",
      name: "Freelance",
      amount: 700,
      description: "App development",
    },
  ]);
  const addToIncome = (newIncome) => {
    setIncome((prev) => [...prev, newIncome]);
  };
  return (
    <IncomeContext.Provider value={{ income, addToIncome }}>
      {children}
    </IncomeContext.Provider>
  );
}

export default IncomeContext;
