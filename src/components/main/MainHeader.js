import {
  CaretDownOutlined,
  DollarOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const { Title } = Typography;

const MainHeader = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const { logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
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
        <Button
          onClick={handleLogout}
          className="logout_btn"
          style={{ color: "red" }}
        >
          <LogoutOutlined style={{ marginRight: 5 }} />
          Logout
        </Button>
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
            <Title style={{ color: "white", margin: 0 }} level={4}>
              MoneyMinder
            </Title>
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
            <p style={{ fontSize: 14, fontWeight: "400", marginRight: 10 }}>
              {user.displayName ? user.displayName : user.email}
            </p>
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
    </>
  );
};

export default MainHeader;
