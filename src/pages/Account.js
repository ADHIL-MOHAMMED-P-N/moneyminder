import { Avatar, Card, Col, Row, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useUserAuth } from "../context/UserAuthContext";

const { Title } = Typography;
const Account = () => {
  const { user } = useUserAuth();
  console.log(user);
  const createdAt = new Date(user.metadata.creationTime);

  return (
    <div>
      <Row>
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
                  fontWeight: 400,
                  fontSize: 15,
                  margin: 0,
                  marginTop: 10,
                }}
                level={5}
              >
                {user.displayName || "User"}
              </Title>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 10,
                  color: "gray",
                  margin: 0,
                }}
                level={5}
              >
                Member since {createdAt.getDate()}/{createdAt.getMonth() + 1}/
                {createdAt.getFullYear()}
              </p>
            </div>
          </Card>
        </Col>
        <Col span={16}></Col>
      </Row>
    </div>
  );
};

export default Account;
