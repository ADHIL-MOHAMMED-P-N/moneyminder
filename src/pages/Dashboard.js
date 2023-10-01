import React from "react";
import SummaryCard from "../components/Dashboard/SummaryCard";

const Dashboard = () => {
  return (
    <div>
      Dashboard
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
  );
};

export default Dashboard;
