import { Outlet } from "react-router-dom";
import MainSideNav from "../components/main/MainSideNav";
import MainHeader from "../components/main/MainHeader";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
const HomeLayout = () => {
  const headerStyle = {
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
  };
  const contentStyle = {
    minHeight: 120,
  };
  const siderStyle = {
    lineHeight: "120px",
    color: "#fff",
  };
  const footerStyle = {
    color: "#fff",
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={headerStyle}>
        <MainHeader />
      </Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <MainSideNav />
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default HomeLayout;
