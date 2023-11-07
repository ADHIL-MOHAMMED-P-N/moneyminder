import React, { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import CustomTable from "../components/utils/CustomTable";
import { Typography } from "antd";
const { Title } = Typography;
const Expense = () => {
  const { expense } = useContext(ExpenseContext);
  const [transactions, setTransactions] = useState(
    expense.map((item) => ({ ...item, status: "expense" }))
  );
  return (
    <div>
      <Title level={4}>Recent Expenses</Title>
      <CustomTable data={transactions} />
    </div>
  );
};

export default Expense;
