import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import Search from "antd/es/input/Search";

const { Title } = Typography;

const MainHeader = () => {
  const onSearch = () => console.log("Search");
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
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              style={{ marginRight: 15 }}
            />
            <p style={{ fontSize: 16, fontWeight: "500", marginRight: 15 }}>
              UserName
            </p>
            <Avatar
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
              shape="square"
              icon={<UserOutlined />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
