import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  console.log(pathname);
  const activeStyle = {
    fontWeight: 500,
    color: "#1677ff",
  };

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
      key: "/dashboard",
      label: (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="dashboard" /* relative link : (no need to give /dashboard , because / is already there in the parent route(/) */
        >
          Dashboard
        </NavLink>
      ),
      icon: <AreaChartOutlined />,
    },
    {
      key: "/expense",
      label: (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="expense"
        >
          Expense
        </NavLink>
      ),
      icon: <WalletOutlined />,
    },
    {
      key: "/income",
      label: (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="income"
        >
          Income
        </NavLink>
      ),
      icon: <DollarOutlined />,
    },
    {
      key: "/borrowings",
      label: (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/borrowings"
        >
          Borrowings
        </NavLink>
      ),
      icon: <UsergroupAddOutlined />,
    },
    {
      key: "/report",
      label: (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="report"
        >
          Report
        </NavLink>
      ),
      icon: <PaperClipOutlined />,
    },

    {
      key: "/account",
      label: (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="account"
        >
          Account
        </NavLink>
      ),
      icon: <UserOutlined />,
    },
    {
      key: "/logout",
      label: <Button onClick={handleLogout}>logout</Button>,
      icon: <UserOutlined />,
    },
  ];
  return (
    <Menu
      defaultSelectedKeys={[pathname]} //otherwise when refresh or in manual setting of routes the selected styles will lose
      className="custom-sidemenu"
      items={menuItems}
      mode="inline"
    />
  );
};

export default MainSideNav;
