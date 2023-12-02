import { Button, Form, Input, Card, Typography, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleLogin } = useUserAuth();
  const [messageApi, contextHolder] = message.useMessage();

  //error message
  const errorMessage = (error) => {
    messageApi.open({
      type: "error",
      content: error,
    });
  };

  // success message
  const key = "success";
  const successMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Logging In",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Log in success",
        duration: 0.5,
        onClose: () => navigate("/dashboard"),
      });
    }, 2000);
  };

  //handle submit login
  const submitHandler = async (e) => {
    /* change to onsubbmit on form  instead of onclick in button */
    e.preventDefault();
    try {
      await logIn(email, password);
      /*   navigate("/dashboard"); */ //in successmessage
      successMessage();
    } catch (error) {
      console.log(error.message);
      /*  setError(error.message); */ //check why setting error state is not working(problem:on intial error its coming as empty string)
      errorMessage(error.message);
    }
  };

  //login with google

  const googleHandler = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      successMessage();
    } catch (error) {
      console.log(error.message);
      errorMessage(error.message);
    }
  };

  return (
    <>
      {contextHolder}
      {/* context for alert message */}

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
                onClick={submitHandler}
                type="primary"
                htmlType="submit"
                style={{ marginTop: 10 }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <Button
            type="primary"
            block
            icon={<GoogleOutlined />}
            size="large"
            onClick={googleHandler}
          >
            Login With Google
          </Button>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
