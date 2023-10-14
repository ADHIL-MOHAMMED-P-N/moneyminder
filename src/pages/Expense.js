import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
const Expense = () => {
  const { expense } = useContext(ExpenseContext);

  return (
    <div>
      <p>Expense Pagssse</p>
      {expense.map((exp, index) => {
        return <p key={index}>{exp.name}</p>;
      })}
    </div>
  );
};

export default Expense;
