import { Card, Typography, Space, Button, Progress, Tooltip } from "antd";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;

const paraStyle = { margin: 0, fontWeight: 400, color: "rgba(0, 0, 0, 0.45)" };

const CardTop = () => {
  return (
    <>
      <p style={paraStyle}>Total Balance</p>
      <Title
        style={{ margin: 0, marginBottom: 10, fontWeight: "bold" }}
        level={3}
      >
        $21,211.00
      </Title>
      <p style={paraStyle}>
        Balace Last Month<span style={{ color: "#000" }}> $11,000</span>
      </p>
    </>
  );
};

const BalanceCard = () => {
  return (
    <div>
      <Card
        size="small"
        loading={false}
        title={<CardTop />}
        extra={<p style={{ ...paraStyle, fontSize: 12 }}>From Last Month</p>}
        style={{
          /*   width: 300, */
          padding: 10,
        }}
      >
        <Space>
          <Link to="/expense">
            <Button
              style={{
                backgroundColor: "lightgreen",
                color: "green",
                fontWeight: "bold",
              }}
              icon={<WalletOutlined />}
            >
              Expense
            </Button>
          </Link>
          <Link to="/income">
            <Button
              style={{
                backgroundColor: "#FF9595",
                color: "red",
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
