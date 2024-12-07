import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarComponent from "../Components/Sidebar"
import AdminImage from "../assets/AdminImage.jpg"
import axios from "axios";
import { toast } from "react-toastify";


const SuperAdminProfilePage = () => {
 const permissions = ["Manage Customers", "Access Reports","Manage Admins", "Monitor Activity"]

const stats ={
  totalAdmins: 5,
  activeUsers: 500,
  totalearnings: 104705900,
};


  const [superAdmin, setSuperAdmin] = useState({});

  const getAdminDetails = async () => {
    try {
      const authToken = localStorage.getItem("token");
      const _id = localStorage.getItem("adminId");
     
      await axios
        .get(`http://localhost:7000/superadmin/getsuperadmin/?_id=${_id}`,
          {
            headers: { Authorization: `Bearer ${authToken}`}
          }
        )
        .then((res) => {
          toast.success(res.data.Message)
          setSuperAdmin(res.data.superAdmin)
        })
        .catch((err) => {
          toast.error(err.response.data.Message)
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAdminDetails();
  }, []);


  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-200 mb-6">Profile</h1>
      
      <div className="flex flex-col lg:flex-row bg-gray-800 shadow rounded-lg overflow-hidden">
       
        <div className="lg:w-1/3 flex items-center justify-center bg-gray-800 p-6">
          <img
            src={AdminImage}
            alt="Admin Icon"
            className="w-50 h-50 object-cover rounded-full "
          />
        </div>

        <div className="lg:w-2/3 p-6 flex flex-col justify-center bg-gray-800">
          <h2 className="text-xl font-bold flex w-full text-gray-200">{superAdmin.userName}</h2>
          <p className="text-gray-300 font-semibold py-0.5 flex"><span className="block w-20">Role:</span> {superAdmin.role}</p>
          <p className="text-gray-300 font-semibold py-0.5 flex"><span className="block w-20">Email:</span> {superAdmin.email}</p>
          <p className="text-gray-300 font-semibold py-0.5 flex"><span className="block w-20">Contact:</span> {superAdmin.mobileNumber}</p>

         
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-200">Permissions:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {permissions.map((permission, index) => (
                <li key={index}>{permission}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Statistics</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 shadow rounded-lg p-4 text-center flex justify-center flex-col gap-5">
            <h3 className="text-gray-200 font-semibold">Total Admins</h3>
            <p className="text-2xl font-bold text-gray-300">{stats.totalAdmins}</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-4 text-center flex justify-center flex-col gap-5">
            <h3 className="text-gray-200 font-semibold">Active Users</h3>
            <p className="text-2xl font-bold text-gray-300">{stats.activeUsers}</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-4 text-center flex justify-center flex-col gap-5">
            <h3 className="text-gray-200 font-semibold">Total Earnings</h3>
            <p className="text-2xl font-bold text-gray-300">{stats.totalearnings}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Actions</h2>
        <div className="flex space-x-4">
          <Link to={`/updateprofile/${superAdmin._id}`}>
          <button className="bg-orange-400 text-white py-2 px-4 rounded hover:scale-105 transition-all hover:ease-in-out hover:bg-orange-500">
            Edit Profile
          </button>
          </Link>
          <Link to={"/forgot"}>
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
