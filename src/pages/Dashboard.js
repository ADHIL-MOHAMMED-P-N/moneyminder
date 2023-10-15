import { useContext } from "react";
import SummaryCard from "../components/Dashboard/SummaryCard";
import TransactionStatistics from "../components/Dashboard/TransactionStatistics";
import BalanceCard from "../components/Dashboard/BalanceCard";
import RecentTransactionTable from "../components/Dashboard/RecentTransactionTable";
import { Col, Row } from "antd";
import ExpenseContext from "../context/ExpenseContext";

const Dashboard = () => {
  const { expense } = useContext(ExpenseContext);
  // finding monthlyexpense from all
  /*  const monthExpense = expense.filter((exp) => {
    const expDate = new Date(exp.date);
    const expMonth = expDate.getMonth() + 1;
    if (expMonth === month) {
      return true;
    } else return false;
  });
  const totalMonthExpense = monthExpense
    .map((item) => item.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2); */
  /*later compare year also ------expyear should be current year only---------------------- */
  return (
    <>
      {/* Row-1 cards */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <div style={{ marginBottom: 16 }}>
            <SummaryCard
              subtitle="Income"
              percentage={20}
              paraValue={"$8,219.00"}
              transaction={expense} /* change to income */
            />
          </div>
          <div>
            <SummaryCard
              subtitle="Spending"
              percentage={-12.2}
              paraValue={"$6,241.00"}
              transaction={expense}
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
