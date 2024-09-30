
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeadBar from "./HeadBar";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <main className="ml-[220px] p-6 pr-20">
        <HeadBar/>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
