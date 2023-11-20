import React, { useContext } from "react";
import IncomeContext from "../context/IncomeContext";
import CustomTable from "../components/utils/CustomTable";
import { Typography } from "antd";
import AddIncome from "../components/income/AddIncome";
import LineChart from "../components/utils/LineChart";
const { Title } = Typography;
const Income = () => {
  const { income } = useContext(IncomeContext);
  /* storing context value into new state will cause loosing reactivity of the value , don't follow below method */
  /* 
   const [transactions, setTransactions] = useState(
    income.map((item) => ({ ...item, status: "income" }))
  );
  */

  return (
    <div>
      <Title level={4}>Add Income</Title>
      <AddIncome />
      <LineChart transaction={income} />
      <Title level={4}>Recent Incomes</Title>
      <CustomTable
        data={income.map((item) => ({ ...item, status: "income" }))}
      />
    </div>
  );
};

export default Income;
