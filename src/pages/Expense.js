import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import CustomTable from "../components/utils/CustomTable";
import AddExpense from "../components/expense/AddExpense";
import { Typography, Row, Col } from "antd";
import LineChart from "../components/utils/LineChart";
const { Title } = Typography;
const Expense = () => {
  const { expense } = useContext(ExpenseContext);
  /* storing context value into new state will cause loosing reactivity of the value , don't follow below method */
  /*   const [transactions, setTransactions] = useState(
    expense.map((item) => ({ ...item, status: "expense" }))
  ); */

  //line chart

  return (
    <div>
      <Title level={4}>Add Expense</Title>
      <Row gutter={10}>
        <Col span={10}>
          <AddExpense />
        </Col>
        <Col span={14}>
          <LineChart type="expense" transaction={expense} />
        </Col>
      </Row>
      <Title level={4}>Recent Expenses</Title>
      <CustomTable
        data={expense.map((item) => ({ ...item, status: "expense" }))}
      />
    </div>
  );
};

export default Expense;
