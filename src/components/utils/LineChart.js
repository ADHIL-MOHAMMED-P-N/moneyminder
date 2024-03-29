import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card } from "antd";
const LineChart = ({ transaction, type }) => {
  //change monthly transaction logic to context (avoid redundancy)
  //finding current month

  const today = new Date();
  const month = today.getMonth() + 1;
  // finding monthlyexpense from all
  const monthTransaction = transaction.filter((trans) => {
    /* change code to collect this current year transaction only */
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
  /* change to foreach */
  for (let i = 0; i < monthTransaction.length; i++) {
    const day = new Date(monthTransaction[i].date).getDate();
    dailyTransaction[day - 1].amount += monthTransaction[i].amount;
  }

  const chartData = {
    labels: dailyTransaction.map((item) => item.day),
    datasets: [
      {
        label: type === "expense" ? "Expense" : "Income",
        data: dailyTransaction.map((item) => item.amount),
        backgroundColor: type === "income" ? "#e9f9f1" : "#fcebeb",
        borderColor: type === "income" ? "#1ca748" : "#f10509",
        borderRadius: 2,
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };
  return (
    <Card className="border-radius-0 shadow">
      <Line
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
        data={chartData}
      />
    </Card>
  );
};

export default LineChart;
