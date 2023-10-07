import { useState } from "react";
import { Card, Typography, Space } from "antd";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; /* mandatory import for showing chart */
const { Title } = Typography;

const paraStyle = { margin: 0, fontWeight: 400, color: "rgba(0, 0, 0, 0.45)" };
const circleStyle = {
  height: 8,
  width: 8,
  borderRadius: "50%",
};
const CardTitle = () => {
  return (
    <Title style={{ margin: 0, fontWeight: "bold" }} level={5}>
      Statistics
    </Title>
  );
};
const GraphIndex = () => {
  return (
    <Space>
      <Space align="baseline">
        <div style={{ ...circleStyle, backgroundColor: "#b5cef2" }}></div>
        <p style={paraStyle}>spending</p>
      </Space>
      <Space align="baseline">
        <div style={{ ...circleStyle, backgroundColor: "#1677ff" }}></div>
        <p style={paraStyle}>income</p>
      </Space>
    </Space>
  );
};

const TransactionStatistics = () => {
  const [transactions, setTransactions] = useState([
    { month: "January", monthlyExpense: 1000, monthlyIncome: 1200 },
    { month: "february", monthlyExpense: 1500, monthlyIncome: 500 },
    { month: "March", monthlyExpense: 2700, monthlyIncome: 5000 },
    { month: "April", monthlyExpense: 3500, monthlyIncome: 4000 },
  ]);
  const chartData = {
    labels: transactions.map((trans) => trans.month),
    datasets: [
      {
        label: "Expense",
        data: transactions.map((trans) => trans.monthlyExpense),
        backgroundColor: "#b5cef2",
        borderRadius: 5,
      },
      {
        label: "Income",
        data: transactions.map((trans) => trans.monthlyIncome),
        backgroundColor: "#1677ff",
        borderRadius: 5,
      },
    ],
  };
  return (
    <div>
      <Card
        size="small"
        loading={false}
        title={<CardTitle />}
        extra={<GraphIndex />}
        style={{
          /*   width: 400, */
          padding: 10,
        }}
      >
        <Bar data={chartData} />
      </Card>
    </div>
  );
};

export default TransactionStatistics;
