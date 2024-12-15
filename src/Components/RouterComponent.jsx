import React from "react";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "../Pages/OverviewPage";
import MoviesPage from "../Pages/MoviesPage";
import ProfilePage from "../Pages/ProfilePage";
import ReportPage from "../Pages/ReportPage";
import TheaterPage from "../Pages/TheaterPage";
import CustomerPage from "../Pages/CustomerPage";
import HeroSection from "../Pages/HeroSectionPage";
import CreateAdmin from "../Pages/CreateadminPage";
import LoginPage from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import PrivateRoute from "./PrivateRouterComp";
import AdminPage from "../Pages/AdminPage";
import EditProfile from "../Pages/EditProfile";

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route  element={<PrivateRoute />}>
          <Route path="/home" element={<OverviewPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/report" element={<ReportPage />} /> 
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/createadmin" element={<CreateAdmin />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/updateadmin/:_id" element={<CreateAdmin/>} />
          <Route path="/updateprofile/:_id" element={<EditProfile/>} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterComponent;
