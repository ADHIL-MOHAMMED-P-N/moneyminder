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

  const dailyTransaction = [
    { day: 1, amount: 0 },
    { day: 2, amount: 0 },
    { day: 3, amount: 0 },
    { day: 4, amount: 0 },
    { day: 5, amount: 0 },
    { day: 6, amount: 0 },
    { day: 7, amount: 0 },
    { day: 8, amount: 0 },
    { day: 9, amount: 0 },
    { day: 10, amount: 0 },
    { day: 11, amount: 0 },
    { day: 12, amount: 0 },
    { day: 13, amount: 0 },
    { day: 14, amount: 0 },
    { day: 15, amount: 0 },
    { day: 16, amount: 0 },
    { day: 17, amount: 0 },
    { day: 18, amount: 0 },
    { day: 19, amount: 0 },
    { day: 20, amount: 0 },
    { day: 21, amount: 0 },
    { day: 22, amount: 0 },
    { day: 23, amount: 0 },
    { day: 24, amount: 0 },
    { day: 25, amount: 0 },
    { day: 26, amount: 0 },
    { day: 27, amount: 0 },
    { day: 28, amount: 0 },
    { day: 29, amount: 0 },
    { day: 30, amount: 0 },
    { day: 31, amount: 0 },
  ];

  for (let i = 0; i < monthTransaction.length; i++) {
    const date = new Date(monthTransaction[i].date).getDate();
    console.log(date);
  }

  console.log(monthTransaction);

  const chartData = {
    labels: dailyTransaction.map((item) => item.day),
    datasets: [
      {
        label: "Expense",
        data: dailyTransaction.map((item) => item.amount),
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
