import {
  CaretDownOutlined,
  DollarOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Modal, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from "react";

const { Title } = Typography;

const MainHeader = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const { logOut } = useUserAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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

  const items = [
    {
      key: "1",
      label: (
        <Link to="/login">
          <LoginOutlined style={{ marginRight: 10 }} /> Log In
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/signup">
          <UserAddOutlined style={{ marginRight: 10 }} />
          SignUp
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <Button
            icon={<LogoutOutlined style={{ marginRight: 3 }} />}
            onClick={showModal}
            className="logout_btn"
            style={{ color: "red" }}
          >
            Logout
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div>
          <Space align="center">
            <DollarOutlined style={{ fontSize: 25, marginTop: 25 }} />
            <Link to="dashboard">
              <Title style={{ color: "white", margin: 0 }} level={4}>
                MoneyMinder
              </Title>
            </Link>
          </Space>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              style={{
                backgroundColor: "#fde3cf",
                color: "#f56a00",
                marginRight: 10,
              }}
              shape="circle"
              onClick={() => {
                navigate("/login");
              }} /* for testing */
              icon={<UserOutlined />}
              src={user.photoURL}
            />
            <Link to="account" style={{ color: "white" }}>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  marginRight: 10,
                }}
              >
                {user.displayName ? user.displayName : user.email}
              </p>
            </Link>
            <Dropdown
              trigger={["click"]}
              menu={{
                items,
              }}
              placement="topRight"
            >
              <Button
                style={{
                  padding: 0,
                  background: "none",
                  height: 25,
                  width: 25,
                  borderRadius: "50%",
                  border: "none",
                }}
              >
                {/*  <DownOutlined style={{ fontSize: 15, color: "white" }} /> */}
                <CaretDownOutlined style={{ fontSize: 15, color: "white" }} />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>

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

export default MainHeader;
