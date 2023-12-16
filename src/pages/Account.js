import { Avatar, Card, Col, Row, Typography } from "antd";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { useUserAuth } from "../context/UserAuthContext";
import create from "@ant-design/icons/lib/components/IconFont";

const { Title } = Typography;
const Account = () => {
  const { user } = useUserAuth();
  console.log(user);
  const createdAt = user.metadata ? new Date(user.metadata.creationTime) : null;
  const paraStyle = {
    fontWeight: 400,
    fontSize: 12,
    color: "gray",
    margin: 0,
  };

  return (
    <div>
      <Row gutter={20}>
        <Col span={8}>
          <Card style={{ borderRadius: 0 }} size="small">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar size={60} src={user.photoURL} icon={<UserOutlined />} />
              <Title
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  margin: 0,
                  marginTop: 10,
                }}
                level={5}
              >
                {user.displayName ? user.displayName : "User"}
              </Title>
              <p style={paraStyle}>
                Member since
                {createdAt
                  ? ` ${createdAt.getDate()}/${createdAt.getMonth() + 1}/
                ${createdAt.getFullYear()}`
                  : "___"}
              </p>
            </div>
          </Card>
        </Col>
        <Col span={16}>
          <Card
            className="account-detailsCard"
            style={{ borderRadius: 0 }}
            size="small"
            extra={<SettingOutlined />}
            title={<p style={paraStyle}>Account Details</p>}
          >
            <Row>
              <Col span={12}>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ ...paraStyle, color: "blacks", fontWeight: 500 }}>
                    First Name
                  </p>
                  <p style={paraStyle}>
                    {user.displayName ? user.displayName.split(" ")[0] : "___"}
                  </p>
                </div>
                <div>
                  <p style={{ ...paraStyle, color: "blacks", fontWeight: 500 }}>
                    Email
                  </p>
                  <p style={paraStyle}>{user.email ? user.email : "___"}</p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ ...paraStyle, color: "blacks", fontWeight: 500 }}>
                    Last Name
                  </p>
                  <p style={paraStyle}>
                    {user.displayName
                      ? user.displayName.split(" ").slice(1).join(" ")
                      : "___"}
                  </p>
                </div>
                <div>
                  <p style={{ ...paraStyle, color: "blacks", fontWeight: 500 }}>
                    Phone
                  </p>
                  <p style={paraStyle}>
                    {user.phoneNumber ? user.phoneNumber : "___"}
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Account;
