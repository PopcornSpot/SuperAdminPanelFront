import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminPage = () => {
  const [Admin, setAdmin] = useState([]);

  const fetchAdmin = async () => {
    try {
      const authToken = localStorage.getItem("token");
      await axios
        .get("http://localhost:7000/admin/superadmin/alladmin", {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          toast.error(res.data.Error);
          setAdmin(res.data.allAdmins);
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            return toast.error("Request to Login Again");
          }
          toast.error(err.response?.data?.Error || "An error occurred");
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleDelete = async (_id) => {
    try {
      const authToken = localStorage.getItem("token");
      await axios
        .delete(`http://localhost:7000/admin/superadmin/deleteadmin/?_id=${_id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          toast.success(res.data.Message);
          setAdmin((prevState) => prevState.filter((value) => value._id !== _id));
        })
        .catch((err) => {
          toast.error(err.response?.data?.Message || "An error occurred");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SidebarComponent />
      <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
        <div className="p-6 bg-gray-900 min-h-screen">
          <h1 className="text-2xl font-bold text-gray-200 mb-4">Admin List</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-gray-300">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 px-4 py-2">Name</th>
                  <th className="border border-gray-700 px-4 py-2">Theatre Name</th>
                  <th className="border border-gray-700 px-4 py-2">Email</th>
                  <th className="border border-gray-700 px-4 py-2">Mobile</th>
                  <th className="border border-gray-700 px-4 py-2">Location</th>
                  <th className="border border-gray-700 px-4 py-2">Theatres</th>
                  <th className="border border-gray-700 px-4 py-2">Pincode</th>
                  <th className="border border-gray-700 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Admin.map((admin) => (
                  <tr key={admin._id} className="hover:bg-gray-800">
                    <td className="border border-gray-700 px-4 py-2">{admin.adminName}</td>
                    <td className="border border-gray-700 px-4 py-2">{admin.theatreName}</td>
                    <td className="border border-gray-700 px-4 py-2">{admin.email}</td>
                    <td className="border border-gray-700 px-4 py-2">{admin.mobileNumber}</td>
                    <td className="border border-gray-700 px-4 py-2">{admin.location}</td>
                    <td className="border border-gray-700 px-4 py-2">{admin.noOfTheatres}</td>
                    <td className="border border-gray-700 px-4 py-2">{admin.pincode}</td>
                    <td className="border border-gray-700 px-4 py-2">
                      <div className="flex gap-4 justify-center items-center">
                        <Link to={`/updateadmin/${admin._id}`}>
                          <button
                            className="text-blue-500 hover:bg-blue-500 hover:text-white p-2 rounded-full transition duration-200"
                            title="Update"
                          >
                            <FaEdit size={18} />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(admin._id)}
                          className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full transition duration-200"
                          title="Delete"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
