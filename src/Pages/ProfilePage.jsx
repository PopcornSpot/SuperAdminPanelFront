import React from "react";
import { Link } from "react-router-dom";
import SidebarComponent from "../Components/Sidebar"
import AdminImage from "../assets/AdminImage.jpg"

const SuperAdminProfilePage = () => {
  const superAdmin = {
    name: "Super Admin",
    email: "superadmin@gmail.com",
    contact: "9834567890",
    role: "Super Admin",
    permissions: ["Manage Customers", "Access Reports","Manage Admins", "Monitor Activity"],
    stats: {
      totalAdmins: 5,
      activeUsers: 500,
      totalearnings: 104705900,
    },
  };

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
      
      <div className="flex flex-col lg:flex-row bg-white shadow rounded-lg overflow-hidden">
       
        <div className="lg:w-1/3 flex items-center justify-center bg-white p-6">
          <img
            src={AdminImage}
            alt="Admin Icon"
            className="w-50 h-50 object-cover rounded-full "
          />
        </div>

        <div className="lg:w-2/3 p-6 flex flex-col justify-center bg-slate-200">
          <h2 className="text-xl font-bold text-gray-800">{superAdmin.name}</h2>
          <p className="text-gray-600 font-semibold py-0.5 flex"><span className="block w-20">Name:</span> {superAdmin.role}</p>
          <p className="text-gray-600 font-semibold py-0.5 flex"><span className="block w-20">Email:</span> {superAdmin.email}</p>
          <p className="text-gray-600 font-semibold py-0.5 flex"><span className="block w-20">Contact:</span> {superAdmin.contact}</p>

         
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Permissions:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {superAdmin.permissions.map((permission, index) => (
                <li key={index}>{permission}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Statistics</h2>
        <div className="h-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-4 text-center flex justify-center flex-col gap-5">
            <h3 className="text-gray-600 font-semibold">Total Admins</h3>
            <p className="text-2xl font-bold text-gray-800">{superAdmin.stats.totalAdmins}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center flex justify-center flex-col gap-5">
            <h3 className="text-gray-600 font-semibold">Active Users</h3>
            <p className="text-2xl font-bold text-gray-800">{superAdmin.stats.activeUsers}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center flex justify-center flex-col gap-5">
            <h3 className="text-gray-600 font-semibold">Total Earnings</h3>
            <p className="text-2xl font-bold text-gray-800">{superAdmin.stats.totalearnings}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Actions</h2>
        <div className="flex space-x-4">
          <Link>
          <button className="bg-orange-400 text-white py-2 px-4 rounded hover:scale-105 transition-all hover:ease-in-out hover:bg-orange-500">
            Edit Profile
          </button>
          </Link>
          <Link>
          <button className="bg-orange-400 text-white py-2 px-4 rounded hover:scale-105 transition-all hover:ease-in-out hover:bg-orange-500">
            Change Password
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SuperAdminProfilePage;
