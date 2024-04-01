import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { Button, Menu, Modal } from "antd";
import {
  AreaChartOutlined,
  DollarOutlined,
  PaperClipOutlined,
  UserOutlined,
  WalletOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from "react";

const MainSideNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
  /* modal */
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleLogout();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
    /*  {
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
    }, */
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
      label: (
        <Button
          danger
          className="logout_btn text-left shadow-none "
          onClick={showModal}
          icon={<LogoutOutlined style={{ marginRight: 2 }} />}
        >
          Logout
        </Button>
      ),
    },
  ];
  return (
    <>
      <Menu
        defaultSelectedKeys={[pathname]} //otherwise when refresh or in manual setting of routes the selected styles will lose
        className="custom-sidemenu"
        items={menuItems}
        mode="inline"
      />

      {/* modal on logout */}
      <Modal
        footer={[
          <Button key="back" onClick={handleCancel}>
            No
          </Button>,
          <Button key="submit" type="primary" danger onClick={handleOk}>
            Yes
          </Button>,
        ]}
        title="Logout"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to logout of your account</p>
      </Modal>
    </>
  );
};

export default MainSideNav;
