import { useContext } from "react";
import SummaryCard from "../components/Dashboard/SummaryCard";
import TransactionStatistics from "../components/Dashboard/TransactionStatistics";
import BalanceCard from "../components/Dashboard/BalanceCard";
import RecentTransactionTable from "../components/Dashboard/RecentTransactionTable";
import { Col, Row } from "antd";
import ExpenseContext from "../context/ExpenseContext";
import IncomeContext from "../context/IncomeContext";

const Dashboard = () => {
  const { expense } = useContext(ExpenseContext);
  const { income } = useContext(IncomeContext);
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
              transaction={income} /* change to income */
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
          <TransactionStatistics income={income} expense={expense} />
        </Col>
        <Col span={8}>
          <BalanceCard income={income} expense={expense} />
        </Col>
      </Row>
      {/* Row - 2 Table and saving plans */}
      <Row>
        <Col span={24}>
          <RecentTransactionTable />
        </Col>
        {/* <Col span={8}></Col> */}
      </Row>
    </>
  );
};

export default Dashboard;
