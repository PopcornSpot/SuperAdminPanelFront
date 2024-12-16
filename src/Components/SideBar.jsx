import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaImages, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { RiAdminFill, RiMovie2Fill } from "react-icons/ri";
import { GiTheater } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdReportProblem } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { BiSolidLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";

const SidebarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 shadow-md flex items-center justify-between px-4 z-50 sm:hidden">
        <img src={logo} alt="logo" className="h-10 w-28" />
        <IoMenu
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl text-orange-400 cursor-pointer"
        />
      </div>

      {/* Sidebar */}
      <div className="flex">
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-52 bg-gray-800 text-white transform transition-transform duration-300 z-40 sm:hidden ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 text-center">
            <img src={logo} alt="logo" className="w-32 mx-auto" />
          </div>
          <ul className="mt-4 space-y-2">
            {SidebarDetail.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 text-sm font-medium transition-colors rounded-md ${
                    location.pathname === item.path
                      ? "bg-orange-400 text-white"
                      : "hover:bg-orange-400 hover:text-white"
                  }`}
                  onClick={() => setIsSidebarOpen(false)} 
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.value}
                </Link>
              </li>
            ))}
            <li
              onClick={() => {
                handleLogout();
                setIsSidebarOpen(false);
              }}
              className="flex items-center cursor-pointer p-3 text-sm font-medium transition-colors rounded-md hover:bg-gray-700 hover:text-white"
            >
              <span className="mr-3 text-lg">
                <BiSolidLogOut />
              </span>
              Logout
            </li>
          </ul>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden sm:block fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
          <div className="p-4 text-center">
            <img src={logo} alt="logo" className="w-32 mx-auto" />
          </div>
          <ul className="mt-4 space-y-2">
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

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SidebarComponent;
