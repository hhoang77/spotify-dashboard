import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <div className="w-1/5">
          <Navbar />
        </div>
        <div className="flex-1 m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
