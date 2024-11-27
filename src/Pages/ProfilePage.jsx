import React from "react";
import { Link } from "react-router-dom";

const SuperAdminProfilePage = () => {
  const superAdmin = {
    name: "Super Admin",
    email: "superadmin@gmail.com",
    contact: "9834567890",
    role: "Super Admin",
    permissions: ["Manage Customers", "Access Reports","Manage Admins", "Monitor Activity"],
    image: "data:image/jpeg;base64,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",
    stats: {
      totalAdmins: 5,
      activeUsers: 500,
      totalearnings: 104705900,
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
      
      <div className="flex flex-col lg:flex-row bg-white shadow rounded-lg overflow-hidden">
       
        <div className="lg:w-1/3 flex items-center justify-center bg-gray-200 p-6">
          <img
            src={superAdmin.image}
            alt={superAdmin.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        <div className="lg:w-2/3 p-6">
          <h2 className="text-xl font-bold text-gray-800">{superAdmin.name}</h2>
          <p className="text-gray-600">Role: {superAdmin.role}</p>
          <p className="text-gray-600">Email: {superAdmin.email}</p>
          <p className="text-gray-600">Contact: {superAdmin.contact}</p>

         
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-gray-600">Total Admins</h3>
            <p className="text-2xl font-bold text-gray-800">{superAdmin.stats.totalAdmins}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-gray-600">Active Users</h3>
            <p className="text-2xl font-bold text-gray-800">{superAdmin.stats.activeUsers}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-gray-600">Total Earnings</h3>
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
  );
};

export default SuperAdminProfilePage;
