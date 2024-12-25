import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPage from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import PrivateRoute from "./Components/PrivateRouterComp";
import OverviewPage from "./Pages/OverviewPage";
import MoviesPage from "./Pages/MoviesPage";
import TheaterPage from "./Pages/TheaterPage";
import CustomerPage from "./Pages/CustomerPage";
import ReportPage from "./Pages/ReportPage";
import HeroSection from "./Pages/HeroSectionPage";
import CreateAdmin from "./Pages/CreateadminPage";
import AdminPage from "./Pages/AdminPage";
import EditProfile from "./Pages/EditProfile";
import AddBannerForm from "./Pages/AddHeroScetion";
import ProfilePage from "./Pages/ProfilePage";
import SuperAdminProfilePage from "./Pages/ProfilePage";

const AppComponent = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route  element={<PrivateRoute />}>
          <Route path="/home" element={<OverviewPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/profile" element={<SuperAdminProfilePage />} />
          <Route path="/report" element={<ReportPage />} /> 
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/createadmin" element={<CreateAdmin />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/updateadmin/:_id" element={<CreateAdmin/>} />
          <Route path="/updateprofile/:_id" element={<EditProfile/>} />
          <Route path="/addbanner" element={<AddBannerForm/>} />
          <Route path="/updatebanner/:_id" element={<AddBannerForm/>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppComponent;
