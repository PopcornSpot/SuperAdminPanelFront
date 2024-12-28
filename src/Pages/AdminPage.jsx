import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar";
import Image from "../assets/Adminpng.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [Admin, setAdmin] = useState([]);
  const fetchAdmin = async () => {
    try {
      const authToken = localStorage.getItem("token");
      await axios
        .get("http://localhost:7000/admin/superadmin/alladmin",
           {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
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
        .delete(`http://localhost:7000/admin/superadmin/deleteadmin/?_id=${_id}`,
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
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Theaters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {Admin.map((admin) => (
          <div
            key={admin.id}
            className="bg-gray-800 shadow rounded-lg mt-6 overflow-hidden border border-gray-900 hover:shadow-sm hover:-translate-y-1 transition-all hover:shadow-gray-500"
          >
           <div className="w-full h-40 bg-white">
           <img
              src={Image}
              alt="AdminImage"
              className="w-full h-40 object-scale-down"
            />
           </div>
            <div className="p-4 flex items-start justify-between min-h-[380px] flex-col gap-1">
              <h2 className="text-lg font-semibold text-gray-100 w-full text-center">
                {admin.adminName}
              </h2>
              <p className="text-gray-300">Theatre Name: {admin.theatreName}</p>
              <p className="text-gray-300">Email: {admin.email}</p>
              <p className="text-gray-300">Mobile Number: {admin.mobileNumber}</p>
              <p className="text-gray-300">Location: {admin.theatreID}</p>
              <p className="text-gray-300">Theatres: {admin.noOfTheatres}</p>
              <p className="text-gray-300">Location: {admin.location}</p>
              <p className="text-gray-300">Pincode: {admin.pincode}</p>
             
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
