import { FaRegUser } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="w-full  border-r-[2px] h-screen overflow-auto border-solid border-gray-300 ">
      <Link to="/dashboard/">
        <div
          className={`${
            location.pathname === "/dashboard/" ? "bg-gray-300" : ""
          } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <MdOutlineDashboard className="text-2xl" />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to="/dashboard/song">
        <div
          className={`${
            location.pathname === "/dashboard/song/" ? "bg-gray-300" : ""
          } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <FaGuitar className="text-2xl" />
          <p>Song</p>
        </div>
      </Link>
      <Link to="/dashboard/artist">
        <div
          className={`${
            location.pathname === "/dashboard/artist/" ? "bg-gray-300" : ""
          } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <FaMusic className="text-2xl" />
          <p>Artist</p>
        </div>
      </Link>
      <Link to="/dashboard/genre">
        <div
          className={`${
            location.pathname === "/dashboard/genre" ? "bg-gray-300" : ""
          } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <FaMicrophone className="text-2xl" />
          <p>Genre</p>
        </div>
      </Link>
      <Link to="/dashboard/user">
        <div
          className={`${
            location.pathname === "/dashboard/user" ? "bg-gray-300" : ""
          } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
        >
          <FaRegUser className="text-2xl" />
          <p>User</p>
        </div>
      </Link>

      <div className="my-2">
        <p className="m-2 p-3">Settings</p>
        <Link to="/dashboard/setting">
          <div
            className={`${
              location.pathname === "/dashboard/setting" ? "bg-gray-300" : ""
            } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
          >
            <IoSettingsOutline className="text-2xl" />
            <p>Settings</p>
          </div>
        </Link>
        <Link to="/dashboard/contact">
          <div
            className={`${
              location.pathname === "/dashboard/contact" ? "bg-gray-300" : ""
            } m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50`}
          >
            <IoIosHelpCircleOutline className="text-2xl" />
            <p>Contact Us</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
