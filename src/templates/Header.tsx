import { BsSearch } from "react-icons/bs";
import Logo from "../assets/logo_spotify.png";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <div
      style={{ boxShadow: "rgba(21, 34, 50, 0.08) 0px 1px 4px 0px" }}
      className=" w-full bg-white"
    >
      <div className="mx-8 items-center flex py-2">
        <div className="flex justify-start w-1/4">
          <a href="/">
            <div className="logo">
              <img className="w-[50px] h-[50px]" src={Logo} alt="logo" />
            </div>
          </a>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex relative justify-center items-center">
            <input
              className="h-[35px] border px-1 rounded border-gray-200 focus:border-none"
              type="text"
              placeholder="Search...."
            />
            <IoIosSearch className="absolute right-0 justify-center text-center items-center text-3xl mx-1 opacity-60 hover:opacity-30 cursor-pointer" />
          </div>
          <div className="avarta">
            {/* <Avarta /> */}
            <img className="w-[50px] h-[50px]" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
