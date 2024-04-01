import { Outlet } from "react-router-dom";
import MainSideNav from "../components/main/MainSideNav";
import MainHeader from "../components/main/MainHeader";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MainFooter from "../components/main/MainFooter";
import Sider from "antd/es/layout/Sider";
const HomeLayout = () => {
  const headerStyle = {
    color: "#fff",
    height: 55,
    paddingInline: 25,
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
    backgroundColor: "#001529",
    color: "#fff",
    padding: 0,
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={headerStyle}>
        <MainHeader />
      </Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <MainSideNav />
        </Sider>
        <Content style={contentStyle}>
          <div
            style={{
              padding: 10,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
