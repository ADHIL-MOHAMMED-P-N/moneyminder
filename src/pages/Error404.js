import React from "react";
import ErrorImage from "../components/utils/ErrorImage";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
const { Title } = Typography;
const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: 300, textAlign: "center" }}>
        <ErrorImage />
        <Title style={{ textAlign: "center" }} level={3}>
          404 Resource not found
        </Title>
        <Button
          style={{ margin: "auto" }}
          onClick={() => navigate("/dashboard")}
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default Error404;
