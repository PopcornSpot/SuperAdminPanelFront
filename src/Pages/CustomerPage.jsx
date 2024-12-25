import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar"
import customerImage from "../assets/AdminImage.jpg"
import axios from "axios";
import { toast } from "react-toastify";

const CustomerPage = () => {
  const [allUser, setAllUser] = useState([]);

  const fetchAllUsers = async () => {
    try {
      await axios.get("http://localhost:7000/user/getalluser")
        .then((res) => {
          setAllUser(res.data.allUsers);
        })
        .catch((err) => {
          toast.error(err.response?.data?.Error || err.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
      fetchAllUsers();
    }, []);

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allUser.map((customer) => (
          <div
            key={customer._id}
            className="bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-700"
          >
            <img
              src={customer.fileName?"http://localhost:7000/upload/" + customer.fileName : customerImage}
              alt={customer.userName}
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-200">
                {customer.userName}
              </h2>
              <p className="text-gray-300">{customer.email}</p>
              <p className="text-gray-300">{customer.mobileNumber}</p>
              <p className="text-gray-300 italic mt-2">
                {/* "{customer.activity}" */}
              </p>
              {/* <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500">
                Delete Profile
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default CustomerPage;
