import { Link, useNavigate } from "react-router-dom";
import { Button, Menu } from "antd";
import {
  AreaChartOutlined,
  DollarOutlined,
  PaperClipOutlined,
  UserOutlined,
  WalletOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useUserAuth } from "../../context/UserAuthContext";

const MainSideNav = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
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
      key: "borrowings",
      label: <Link to="/borrowings">Borrowings</Link>,
      icon: <UsergroupAddOutlined />,
    },
    {
      key: "report",
      label: <Link to="/report">Report</Link>,
      icon: <PaperClipOutlined />,
    },

    {
      key: "account",
      label: <Link to="/account">Account</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: <Button onClick={handleLogout}>logout</Button>,
      icon: <UserOutlined />,
    },
  ];
  return <Menu className="custom-sidemenu" items={menuItems} mode="inline" />;
};

export default MainSideNav;
