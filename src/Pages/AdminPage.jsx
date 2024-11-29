import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/Sidebar";
import Image from "../assets/Login.jpg"
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [Admin, setAdmin] = useState([]);
  const fetchAdmin = async () => {
    try {
      const authToken = localStorage.getItem("token");
      await axios
        .get("http://localhost:7000/admin/alladmin",
          {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.success(res.data.Message)
          toast.error(res.data.Error)
          setAdmin(res.data.allAdmins);

        })
        .catch((err) =>{
          if (err.status === 401) {
              return toast.error("Request to Login Again")
                }
          toast.error(err.response.data.Error)
        });
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);



  const handleDelete = async (_id) => {
    try {
      const authToken = localStorage.getItem("token");
      await axios
        .delete(`http://localhost:7000/admin/deleteadmin/?_id=${_id}`,
          {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.success(res.data.Message);
          setAdmin((prevState) =>
            prevState.filter((value) => value._id !== _id)
          );
        })
        .catch((err) => {
          toast.error(err.response.data.Message)
        });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Theaters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Admin.map((admin) => (
          <div
            key={admin.id}
            className="bg-white shadow rounded-lg overflow-hidden border border-gray-200 hover:shadow-sm hover:translate-y-1 transition-all hover:shadow-gray-500"
          >
            <img
              src={Image}
              alt="AdminImage"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex items-start flex-col gap-1">
              <h2 className="text-lg font-semibold text-gray-800 w-full text-center">
                {admin.adminName}
              </h2>
              <p className="text-gray-600">Theatre Name: {admin.theatreName}</p>
              <p className="text-gray-600">Location: {admin.email}</p>
              <p className="text-gray-600">Screens: {admin.mobileNumber}</p>
              <p className="text-gray-600">Location: {admin.theatreID}</p>
              <p className="text-gray-600">Screens: {admin.noOfTheatres}</p>
              <p className="text-gray-600">Location: {admin.location}</p>
              <p className="text-gray-600">Screens: {admin.pincode}</p>
             
              <div className="w-full h-full flex justify-evenly items-center">
              <Link to={`/updateadmin/${admin._id}`} >
              <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500">
                Update
              </button>
              </Link>
              <button onClick={() => handleDelete(admin._id)}
              className="mt-4 bg-orange-400 text-white py-2 px-5 rounded hover:bg-orange-500">
                Delete
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default AdminPage;
