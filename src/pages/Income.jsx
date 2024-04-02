import React, { useContext } from "react";
import IncomeContext from "../context/IncomeContext";
import CustomTable from "../components/utils/CustomTable";
import { Typography, Row, Col } from "antd";
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
  const monthName = new Date().toLocaleString("default", { month: "long" });
  return (
    <div>
      <Row gutter={10}>
        <Col span={10}>
          <Title level={4}>Add Income</Title>
          <AddIncome />
        </Col>
        <Col span={14}>
          <Title level={4}>Month Income - {monthName}</Title>
          <LineChart type="income" transaction={income} />
        </Col>
      </Row>

      <Title level={4}>Recent Incomes</Title>
      <CustomTable
        data={income.map((item) => ({ ...item, status: "income" }))}
      />
    </div>
  );
};

export default Income;
