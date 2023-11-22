import { Button, Form, Input, Card, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        size="small"
        style={{
          width: "100%",
          maxWidth: 500,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Title level={4} style={{ marginTop: 0 }}>
          Log in
        </Title>
        <p>
          Don't have an account ? <Link to={"/signup"}>Sing Up</Link>
        </p>
        <Form layout="vertical" size="large" autoComplete="off">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
