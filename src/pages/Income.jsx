import React, { useContext, useState } from "react";
import IncomeContext from "../context/IncomeContext";
import CustomTable from "../components/utils/CustomTable";
import { Typography } from "antd";
const { Title } = Typography;
const Income = () => {
  const { income } = useContext(IncomeContext);
  const [transactions, setTransactions] = useState(
    income.map((item) => ({ ...item, status: "income" }))
  );
  return (
    <div>
      <Title level={4}>Recent Incomes</Title>
      <CustomTable data={transactions} />
    </div>
  );
};

export default Income;
