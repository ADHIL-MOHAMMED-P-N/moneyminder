import React, { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import CustomTable from "../components/utils/CustomTable";
import AddExpense from "../components/expense/AddExpense";
import { Typography } from "antd";
const { Title } = Typography;
const Expense = () => {
  const { expense } = useContext(ExpenseContext);
  const [transactions, setTransactions] = useState(
    expense.map((item) => ({ ...item, status: "expense" }))
  );
  return (
    <div>
      <AddExpense />
      <Title level={4}>Recent Expenses</Title>
      <CustomTable data={transactions} />
    </div>
  );
};

export default Expense;
