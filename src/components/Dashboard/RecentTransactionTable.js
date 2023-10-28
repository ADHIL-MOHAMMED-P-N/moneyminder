import CustomTable from "../utils/CustomTable";
import { Typography } from "antd";
import { useContext } from "react";
import IncomeContext from "../../context/IncomeContext";
import ExpenseContext from "../../context/ExpenseContext";
const { Title } = Typography;
const RecentTransactionTable = () => {
  const { income } = useContext(IncomeContext);
  const { expense } = useContext(ExpenseContext);
  const newIncome = income.map((item) => ({
    ...item,
    status: "income",
  }));
  const newExpense = expense.map((item) => ({
    ...item,
    status: "expense",
  }));
  const transactions = newIncome.concat(newExpense);

  return (
    <>
      <Title level={4}>Recent Transactions</Title>
      <CustomTable data={transactions} />
    </>
  );
};

export default RecentTransactionTable;
