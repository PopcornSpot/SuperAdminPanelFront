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

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<OverviewPage />} />
        </Route>

        <Route path="/movies" element={<PrivateRoute />}>
        <Route index element={<MoviesPage />} />
        </Route>

        <Route path="/theater" element={<PrivateRoute />}>
        <Route index element={<TheaterPage />} /> 
        </Route>

        <Route path="/customer" element={<PrivateRoute />}>
        <Route index element={<CustomerPage />} />
        </Route>

        <Route path="/profile" element={<PrivateRoute />}>
        <Route index element={<ProfilePage />} />
        </Route>

        <Route path="/report" element={<PrivateRoute />}>
        <Route index element={<ReportPage />} />
        </Route>

        <Route path="/herosection" element={<PrivateRoute />}>
        <Route index element={<HeroSection />} />
        </Route>

        <Route path="/createadmin" element={<PrivateRoute />}>
        <Route index element={<CreateAdmin />} />
        </Route>

        <Route path="/admin" element={<PrivateRoute />}>
        <Route index element={<AdminPage/>} />
        </Route>
  
        <Route path="/updateadmin/:_id" element={<PrivateRoute />}>
        <Route index element={<CreateAdmin/>} />
        </Route>


      </Routes>
    </>
  );
};

export default RouterComponent;
