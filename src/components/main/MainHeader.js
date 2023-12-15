import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import Search from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const { Title } = Typography;

const MainHeader = () => {
  const onSearch = () => console.log("Search");
  const navigate = useNavigate();
  const { user } = useUserAuth();
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
          <Title style={{ color: "white", margin: 0 }} level={5}>
            MoneyMinder
          </Title>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/*   <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              style={{ marginRight: 15 }}
            /> */}
            <p style={{ fontSize: 16, fontWeight: "500", marginRight: 15 }}>
              {user ? user.email : "User"}
            </p>
            <Avatar
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
              shape="circle"
              onClick={() => {
                navigate("/login");
              }} /* for testing */
              icon={<UserOutlined />}
              src={user.photoURL}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
