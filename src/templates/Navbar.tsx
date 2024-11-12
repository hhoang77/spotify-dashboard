import { FaRegUser } from "react-icons/fa";

import { FaMusic } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full  border-r-[2px] h-screen overflow-auto border-solid border-gray-300 ">
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <MdOutlineDashboard className="text-2xl" />
        <Link to="/dashboard/">Dashboard</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <FaGuitar className="text-2xl" />
        <Link to="/dashboard/song">Song</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <FaMusic className="text-2xl" />
        <Link to="/dashboard/artist">Artist</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <FaMicrophone className="text-2xl" />
        <Link to="/dashboard/genre">Genre</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <FaRegUser className="text-2xl" />
        <Link to="/dashboard/user">User</Link>
      </div>

      <div className="my-2">
        <p className="m-2 p-3">Settings</p>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <IoSettingsOutline className="text-2xl" />
          <Link to="/dashboard/setting">Settings</Link>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <IoIosHelpCircleOutline className="text-2xl" />
          <Link to="/dashboard/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
