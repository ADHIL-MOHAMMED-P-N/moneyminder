import React from "react";
import SummaryCard from "../components/Dashboard/SummaryCard";
import TransactionStatistics from "../components/Dashboard/TransactionStatistics";
import BalanceCard from "../components/Dashboard/BalanceCard";
import RecentTransactionTable from "../components/Dashboard/RecentTransactionTable";
const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <SummaryCard
            subtitle="Income"
            title="$59,839.80"
            percentage={20}
            paraValue={"$8,219.00"}
          />
          <SummaryCard
            subtitle="Spending"
            title="$38,593.90"
            percentage={-12.2}
            paraValue={"$6,241.00"}
          />
        </div>
        <TransactionStatistics />
        <BalanceCard />
      </div>
      <RecentTransactionTable />
    </div>
  );
};

export default Dashboard;
