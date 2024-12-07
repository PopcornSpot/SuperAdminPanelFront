import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaImages, FaTachometerAlt } from "react-icons/fa";
import { RiAdminFill, RiMovie2Fill } from "react-icons/ri";
import { GiTheater } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdReportProblem } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { BiSolidLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";

const SidebarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const SidebarDetail = [
    { value: "Overview", icon: <FaTachometerAlt />, path: "/home" },
    { value: "Create Admin", icon: <RiAdminFill />, path: "/createadmin" },
    { value: "Admins", icon: <RiAdminFill />, path: "/admin" },
    { value: "Movies", icon: <RiMovie2Fill />, path: "/movies" },
    { value: "Theater", icon: <GiTheater />, path: "/theater" },
    { value: "Customers", icon: <FaUsers />, path: "/customer" },
    { value: "Hero Section", icon: <FaImages />, path: "/herosection" },
    { value: "Profile", icon: <CgProfile />, path: "/profile" },
    { value: "Reports", icon: <MdReportProblem />, path: "/report" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [burgerValue, setBurgerValue] = useState(false);

  return (
    <>
      {/* Small Screen Burger Menu */}
      <div className="w-full sm:hidden">
        <div
          className="w-full h-16 px-4 bg-gray-800 shadow-lg shadow-black flex justify-between items-center gap-5"
        >
          <IoMenu
            onClick={() => setBurgerValue(!burgerValue)}
            className="text-[20px] cursor-pointer text-orange-400"
          />
          <img src={logo} alt="logo" className="h-10 w-28" />
        </div>
      </div>

      {/* Sidebar (always visible on large screens, toggleable on small screens) */}
      <div className="flex h-full relative">
        {/* Sidebar on small screens */}
        <div
          className={`fixed top-0 left-0 h-full w-52 bg-gray-800 text-white sm:hidden ${
            burgerValue ? "block" : "hidden"
          }`}
        >
          <div className="w-52 xl:w-60 h-screen bg-gray-800">
            <div className="p-4 text-2xl font-bold h-[15%] flex items-center justify-center shadow-sm">
              <img src={logo} alt="logo" />
            </div>
            <ul className="mt-4 space-y-2 shadow-sm">
              {SidebarDetail.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 text-sm font-medium transition-colors rounded-md ${
                      location.pathname === item.path
                        ? "bg-orange-400 text-white"
                        : "hover:bg-orange-400 hover:text-white"
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.value}
                  </Link>
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="flex items-center cursor-pointer p-3 text-sm font-medium transition-colors rounded-md hover:bg-gray-700 hover:text-white"
              >
                <span className="mr-3 text-lg">
                  <BiSolidLogOut />
                </span>
                Logout
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar on large screens */}
        <div className="hidden sm:block fixed top-0 left-0 h-full w-52 bg-gray-800 text-white">
          <div className="w-52 xl:w-60 h-screen bg-gray-800">
            <div className="p-4 text-2xl font-bold h-[15%] flex items-center justify-center shadow-sm">
              <img src={logo} alt="logo" />
            </div>
            <ul className="mt-4 space-y-2 shadow-sm">
              {SidebarDetail.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 text-sm font-medium transition-colors rounded-md ${
                      location.pathname === item.path
                        ? "bg-orange-400 text-white"
                        : "hover:bg-orange-400 hover:text-white"
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.value}
                  </Link>
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="flex items-center cursor-pointer p-3 text-sm font-medium transition-colors rounded-md hover:bg-gray-700 hover:text-white"
              >
                <span className="mr-3 text-lg">
                  <BiSolidLogOut />
                </span>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
