import { useEffect, useState } from "react";
import { Card, Typography, Space } from "antd";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; /* mandatory import for showing chart */
import { InfoOutlined } from "@ant-design/icons";
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
        <p style={paraStyle}>Expense</p>
      </Space>
      <Space align="baseline">
        <div style={{ ...circleStyle, backgroundColor: "#1677ff" }}></div>
        <p style={paraStyle}>Income</p>
      </Space>
    </Space>
  );
};

const TransactionStatistics = ({ income, expense }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const lastTransaction = [
    { month: "January", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "February", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "March", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "April", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "May", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "June", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "July", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "August", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "September", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "October", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "November", monthlyExpense: 0, monthlyIncome: 0 },
    { month: "December", monthlyExpense: 0, monthlyIncome: 0 },
  ];

  useEffect(() => {
    const newInome = income.map((item) => {
      return {
        name: item.name,
        amount: item.amount,
        date: new Date(item.date),
        desc: item.description,
        status: "income",
      };
    });
    const newExpense = expense.map((item) => {
      return {
        name: item.name,
        amount: item.amount,
        date: new Date(item.date),
        desc: item.description,
        status: "expense",
      };
    });
    const transactionsCombined = newInome
      .concat(newExpense)
      .sort(function (a, b) {
        return b.date - a.date;
      });

    /*   console.log(transactionsCombined); */
    /*  calculting the monthlyexpense and monthlyincome */
    /* change logic into states and useeffects  */
    for (let i = 0; i < transactionsCombined.length; i++) {
      if (transactionsCombined[i].date.getFullYear() === today.getFullYear()) {
        const transMonth = transactionsCombined[i].date.getMonth();
        if (transactionsCombined[i].status === "expense") {
          lastTransaction[transMonth].monthlyExpense +=
            transactionsCombined[i].amount;
        }
        if (transactionsCombined[i].status === "income") {
          lastTransaction[transMonth].monthlyIncome +=
            transactionsCombined[i].amount;
        }
      }
    }
    setTransactions(lastTransaction);
    setLoading(false);
  }, [income, expense]);

  /*  console.log(lastTransaction); */

  const chartData = {
    labels: transactions.map((trans) => trans.month),
    datasets: [
      {
        label: "Expense",
        data: transactions.map((trans) => trans.monthlyExpense),
        backgroundColor: "#b5cef2",
        borderRadius: 2,
      },
      {
        label: "Income",
        data: transactions.map((trans) => trans.monthlyIncome),
        backgroundColor: "#1677ff",
        borderRadius: 2,
      },
    ],
  };
  return (
    <div>
      <Card
        loading={loading}
        className="transaction__statisticsCard border-radius-0 shadow"
        size="small"
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
