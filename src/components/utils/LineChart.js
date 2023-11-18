import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card } from "antd";
const LineChart = ({ transaction }) => {
  //change monthly transaction logic to context (avoid redundancy)
  //finding current month

  const today = new Date();
  const month = today.getMonth() + 1;
  // finding monthlyexpense from all
  const monthTransaction = transaction.filter((trans) => {
    const transDate = new Date(trans.date);
    const transMonth = transDate.getMonth() + 1;
    return transMonth === month;
  });

  console.log(monthTransaction);

  const chartData = {
    labels: monthTransaction.map((item) => item.date),
    datasets: [
      {
        label: "Expense",
        data: monthTransaction.map((item) => item.amount),
        backgroundColor: "#b5cef2",
        borderRadius: 2,
      },
    ],
  };
  return (
    <Card style={{ width: 500 }}>
      <Line data={chartData} />
    </Card>
  );
};

export default LineChart;
