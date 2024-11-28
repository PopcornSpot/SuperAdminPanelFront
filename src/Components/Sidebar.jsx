import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FaTachometerAlt } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { GiTheater } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdReportProblem } from "react-icons/md";

const SidebarComponent = () => {
  const location = useLocation(); 
  console.log("Current Path:", location.pathname);

  const SidebarDetail = [
    { value: "Overview", icon: <FaTachometerAlt />, path: "/" },
    { value: "Movies", icon: <RiMovie2Fill />, path: "/movies" },
    { value: "Theater", icon: <GiTheater />, path: "/theater" },
    { value: "customers", icon: <FaUsers />, path: "/customer" },
    { value: "Profile", icon: <CgProfile />, path: "/profile" },
    { value: "Reports", icon: <MdReportProblem />, path: "/report" },
  ];

  return (
    <div className="w-52 xl:w-60  h-screen bg-white text-black">
      <div className="p-4 text-2xl font-bold h-20 flex items-center justify-center shadow-sm">PopcornSpot</div>
      <ul className="mt-4 space-y-2 shadow-sm">
        {SidebarDetail.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center p-3 text-sm font-medium transition-colors rounded-md ${
                location.pathname === item.path
                  ? "bg-gray-700 text-white" 
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarComponent;
