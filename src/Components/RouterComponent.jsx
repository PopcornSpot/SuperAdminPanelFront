import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarComponent from "./Sidebar";
import OverviewPage from "../Pages/OverviewPage";
import MoviesPage from "../Pages/MoviesPage";
import ProfilePage from "../Pages/ProfilePage";
import ReportPage from "../Pages/ReportPage";
import TheaterPage from "../Pages/TheaterPage";
import CustomerPage from "../Pages/CustomerPage";

const RouterComponent = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
        <SidebarComponent />
      </div>
      <div className="ml-64 flex-1 p-4">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouterComponent;
