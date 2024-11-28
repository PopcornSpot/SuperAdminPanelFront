import React from "react";
import {  Routes, Route } from "react-router-dom";
// import SidebarComponent from "./Sidebar";
import OverviewPage from "../Pages/OverviewPage";
import MoviesPage from "../Pages/MoviesPage";
import ProfilePage from "../Pages/ProfilePage";
import ReportPage from "../Pages/ReportPage";
import TheaterPage from "../Pages/TheaterPage";
import CustomerPage from "../Pages/CustomerPage";
import HeroSection from "../Pages/HeroSectionPage";
// import HeaderMain from "./HeaderComponent";

const RouterComponent = () => {
  return (
    <>
    
      
        <Routes>
          <Route index element={<OverviewPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/herosection" element={<HeroSection />} />
        </Routes>

    </>
  );
};

export default RouterComponent;
