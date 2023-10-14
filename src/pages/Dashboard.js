import { useContext } from "react";
import SummaryCard from "../components/Dashboard/SummaryCard";
import TransactionStatistics from "../components/Dashboard/TransactionStatistics";
import BalanceCard from "../components/Dashboard/BalanceCard";
import RecentTransactionTable from "../components/Dashboard/RecentTransactionTable";
import { Col, Row } from "antd";
import ExpenseContext from "../context/ExpenseContext";

//finding current month
const today = new Date();
const month = today.getMonth() + 1;
console.log(month);

const Dashboard = () => {
  const { expense } = useContext(ExpenseContext);
  const montheExpense = expense.filter((exp) => exp.date);
  return (
    <>
      {/* Row-1 cards */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <div style={{ marginBottom: 16 }}>
            <SummaryCard
              subtitle="Income"
              title="$59,839.80"
              percentage={20}
              paraValue={"$8,219.00"}
            />
          </div>
          <div>
            <SummaryCard
              subtitle="Spending"
              title="$38,593.90"
              percentage={-12.2}
              paraValue={"$6,241.00"}
            />
          </div>
        </Col>
        <Col span={8}>
          <TransactionStatistics />
        </Col>
        <Col span={8}>
          <BalanceCard />
        </Col>
      </Row>
      {/* Row - 2 Table and saving plans */}
      <Row>
        <Col span={16}>
          <RecentTransactionTable />
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default Dashboard;
