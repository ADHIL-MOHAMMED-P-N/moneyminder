import { Card, Typography, Space, Button, Progress, Tooltip } from "antd";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const { Title } = Typography;

const paraStyle = { margin: 0, fontWeight: 400, color: "rgba(0, 0, 0, 0.45)" };

const CardTop = ({ balance }) => {
  return (
    <>
      <p style={paraStyle}>Total Balance</p>
      <Title
        style={{ margin: 0, marginBottom: 10, fontWeight: "bold" }}
        level={3}
      >
        ${balance}
      </Title>
      <p style={paraStyle}>
        Balace Last Month<span style={{ color: "#000" }}> $11,000</span>
      </p>
    </>
  );
};

const BalanceCard = ({ income, expense }) => {
  /* code refactor ------------------- */
  const month = new Date().getMonth(); //0 index based

  const calculateCurrentMonthAmount = (transaction) => {
    return transaction
      .filter((item) => new Date(item.date).getMonth() === month)
      .reduce((acc, item) => acc + item.amount, 0)
      .toFixed(2);
  };

  const [balance, setBalance] = useState(0);
  const [percentage, setPercentage] = useState(100); //monthly balance percent

  useEffect(() => {
    const currentMonthIncome = parseFloat(calculateCurrentMonthAmount(income));
    const currentMonthExpense = parseFloat(
      calculateCurrentMonthAmount(expense)
    );
    if (currentMonthIncome > 0) {
      const spentPercentage = Math.round(
        (currentMonthExpense / currentMonthIncome) * 100
      );
      setPercentage(100 - spentPercentage);
    } else {
      /* when income=0 & expene is there balance percentage=0 */
      setPercentage(0);
    }
    const newBalance = currentMonthIncome - currentMonthExpense;
    setBalance(newBalance.toFixed(2));
  }, [income, expense, month]);
  /* ---------------------------------------------------refactor */
  /* remove redudant code,  */
  // const month = new Date().getMonth(); //0 index based
  /* const currentMonthIncome = income
    .filter((item) => {
      const date = new Date(item.date); // 0 index based
      return date.getMonth() === month;
    })
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
 */
  /*  const currentMonthExpense = expense
    .filter((item) => {
      const date = new Date(item.date);
      return date.getMonth() === month;
    })
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
 */
  //  const balance = currentMonthIncome - currentMonthExpense;
  //const [percentage, setPercentage] = useState(0);
  /* const spentPercentage = Math.round(
    (currentMonthExpense / currentMonthIncome) * 100
  ); */
  // const percentage = 100 - s  pentPercentage;
  return (
    <div>
      <Card
        className="balance__card border-radius-0 shadow"
        size="small"
        loading={false}
        title={<CardTop balance={balance} />}
        extra={<p style={{ ...paraStyle, fontSize: 12 }}>From Last Month</p>}
        style={{
          /*   width: 300, */
          padding: 10,
        }}
      >
        <Space>
          <Link to="/expense">
            <Button
              className="border-radius-0 border-none"
              style={{
                backgroundColor: "#fcebeb",
                color: "red",
                fontWeight: "bold",
              }}
              icon={<WalletOutlined />}
            >
              Expense
            </Button>
          </Link>
          <Link to="/income">
            <Button
              className="border-radius-0 border-none"
              style={{
                backgroundColor: "#e9f9f1",
                color: "green",
                fontWeight: "bold",
              }}
              icon={<DollarOutlined />}
            >
              Income
            </Button>
          </Link>
        </Space>
        <div style={{ marginTop: 10 }}>
          <p style={paraStyle}>Balace For This Month</p>
          <Tooltip
            title={
              percentage > 0
                ? `you have spend ${100 - percentage}% of your monthly income`
                : "You have spend 100% or more of your monthly income"
            }
          >
            <Progress percent={percentage} />
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default BalanceCard;
