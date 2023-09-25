import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AreaChartOutlined,
  DollarOutlined,
  PaperClipOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "dashboard",
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <AreaChartOutlined />,
  },
  {
    key: "expense",
    label: <Link to="/expense">Expense</Link>,
    icon: <WalletOutlined />,
  },
  {
    key: "income",
    label: <Link to="/income">Income</Link>,
    icon: <DollarOutlined />,
  },
  {
    key: "report",
    label: <Link to="/report">Report</Link>,
    icon: <PaperClipOutlined />,
  },
];
const MainSideNav = () => {
  return (
    <div>
      <Menu
        style={{
          width: 300,
        }}
        items={menuItems}
        mode="inline"
      />
    </div>
  );
};

export default MainSideNav;
