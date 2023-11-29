import { Button, Form, Input, Card, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const { Title } = Typography;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  //handle submit signup
  const submitHandler = async (e) => {
    /* change to onsubbmit instead of onclick */
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
      //create a error component and dosplay error.message
    }
  };
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
          Sign Up
        </Title>
        <p>
          Already have an account ? <Link to={"/login"}>Log in</Link>
        </p>
        <Form
          layout="vertical"
          size="large"
          autoComplete="off"
          onFinish={submitHandler}
        >
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
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
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
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              onClick={(e) => {
                submitHandler(e);
                navigate("/dashboard");
              }}
              type="primary"
              htmlType="submit"
              style={{ marginTop: 10 }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupPage;
