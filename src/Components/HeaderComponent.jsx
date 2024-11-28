import React from "react";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
// import Logo from "../../images/CC_logo3.png";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
// import { shadowColor} from "../Reusable Component/ColorSelector";

const HeaderMain = () => {
  return (
    <div className={`w-full h-16 px-4  bg-black shadow-md shadow-black flex justify-between items-center gap-5`}>
      <IoMenu className="text-[20px] cursor-pointer" />
      <img src="" alt="" className="h-10 w-28" />
      <div className="flex items-center gap-3 text-xl">
        <IoSearchSharp className="cursor-pointer text-[20px]" />
        <IoMdNotifications className="cursor-pointer text-[20px]" />
        <FaUserCircle className="cursor-pointer text-[20px]" />
      </div>
    </div>
  );
};

export default HeaderMain;