import CustomTable from "../utils/CustomTable";
import { Typography } from "antd";
const { Title } = Typography;
const RecentTransactionTable = () => {
  return (
    <>
      <Title level={4}>Recent Transactions</Title>
      <CustomTable />
    </>
  );
};

export default RecentTransactionTable;
