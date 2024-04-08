import { Button, Form, Input, Card, message } from "antd";
import { DollarOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleIcon from "../assets/icons/GoogleIcon";

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
      {/* context for alert message */}
      {contextHolder}

      <div className="flex h-dvh">
        <div className="flex-1 p-8">
          <Link to="/dashboard" className="text-xl">
            <DollarOutlined className="mr-2 text-2xl" />
            MoneyMinder
          </Link>
          <div className="flex  items-center justify-center h-full relative">
            <Card
              className="border-none text-center"
              size="small"
              style={{
                width: "100%",
                maxWidth: 500,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <h2 className="text-3xl mb-2">Welcome Back - Login</h2>
              <p className="text-gray-400 text-lg mb-2">
                Lets track your expenses together
              </p>

              <p>For testing the application use below credentials and login</p>
              <div className="flex justify-center space-x-3">
                <p>
                  email : <span className="font-semibold">test@gmail.com</span>
                </p>
                <p>
                  password : <span className="font-semibold">test@1234</span>
                </p>
              </div>

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
                  <Input
                    className="rounded-none p-2 text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    className="rounded-none p-2 text-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item className="mt-7">
                  <Button
                    className="w-full border loginbtn"
                    onClick={submitHandler}
                    htmlType="submit"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
              <Button
                className="mt-7  login__googleBtn flex justify-center"
                icon={<GoogleIcon />}
                block
                size="large"
                onClick={googleHandler}
              >
                Sign In With Google
              </Button>
            </Card>
            <p className="absolute bottom-10">
              <span className="text-gray-400">Don't have an account ?</span>{" "}
              <Link className="font-semibold" to={"/signup"}>
                Sing Up
              </Link>
            </p>
          </div>
        </div>
        <div className="text-white flex-1 h-100-dvh bg-teal-200 loginbg p-8 flex justify-center items-center text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">MoneyMinder</h1>
            <p className="text-lg ">
              MoneyMinder is a powerful web application that empowers you to
              take control of your finances like never before. It's designed to
              be your one-stop solution for tracking your expenses and income,
              helping you make informed financial decisions with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
