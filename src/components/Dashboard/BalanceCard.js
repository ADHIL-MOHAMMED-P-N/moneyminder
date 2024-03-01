import { Card, Typography, Space, Button, Progress, Tooltip } from "antd";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  /* remove redudant code,  */
  const month = new Date().getMonth();
  const currentMonthIncome = income
    .filter((item) => {
      const date = new Date(item.date);
      return date.getMonth() === month;
    })
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const currentMonthExpense = expense
    .filter((item) => {
      const date = new Date(item.date);
      return date.getMonth() === month;
    })
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const [balance, setBalance] = useState(
    currentMonthIncome - currentMonthExpense
  );

  return (
    <div>
      <Card
        className="balance__card"
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
          <p style={paraStyle}>Balace Today</p>
          <Tooltip title={30}>
            <Progress percent={30} />
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default BalanceCard;
