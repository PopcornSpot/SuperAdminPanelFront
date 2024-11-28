import React from "react";
import {  Routes, Route } from "react-router-dom";
import SidebarComponent from "./Sidebar";
import OverviewPage from "../Pages/OverviewPage";
import MoviesPage from "../Pages/MoviesPage";
import ProfilePage from "../Pages/ProfilePage";
import ReportPage from "../Pages/ReportPage";
import TheaterPage from "../Pages/TheaterPage";
import CustomerPage from "../Pages/CustomerPage";
import CreateAdmin from "../Pages/CreateadminPage";

const RouterComponent = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full w-52 bg-gray-800 max-sm:hidden text-white">
        <SidebarComponent />
      </div>
      <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/createadmin" element={<CreateAdmin/>}/>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouterComponent;
