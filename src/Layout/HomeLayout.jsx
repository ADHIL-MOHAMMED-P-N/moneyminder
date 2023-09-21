import { Outlet } from "react-router-dom";
import MainSideNav from "../components/main/MainSideNav";

const HomeLayout = () => {
  return (
    <div>
      <MainSideNav />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
