import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye, FaSearch, FaUserCircle } from "react-icons/fa";

const AdminPage = () => {
  const [Admin, setAdmin] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const fetchAdmin = async () => {
    try {
      const authToken = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:7000/admin/superadmin/alladmin",
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      setAdmin(res.data.allAdmins);
    } catch (error) {
      toast.error(error.response?.data?.Error || "An error occurred");
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleDelete = async (_id) => {
    try {
      const authToken = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:7000/admin/superadmin/deleteadmin/?_id=${_id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      toast.success("Admin deleted successfully");
      setAdmin((prevState) => prevState.filter((value) => value._id !== _id));
    } catch (error) {
      toast.error(error.response?.data?.Message || "An error occurred");
    }
  };

  const filteredAdmins = Admin.filter((admin) =>
    admin.adminName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SidebarComponent />
      <div className="ml-60 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900 min-h-screen">
      <div className="p-6 bg-gray-900 mt-12 sm:mt-0">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-200">Admin List</h1>
          <div className="flex items-center bg-gray-800 p-2 rounded-lg shadow-md mb-4">
            <FaSearch className="text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search admin..."
              className="bg-transparent text-gray-200 ml-2 p-1 w-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
</div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-gray-300">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 px-4 py-2">Profile</th>
                  <th className="border border-gray-700 px-4 py-2">Name</th>
                  <th className="border border-gray-700 px-4 py-2">
                    Theatre Name
                  </th>
                  <th className="border border-gray-700 px-4 py-2">Email</th>
                  <th className="border border-gray-700 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.map((admin) => (
                  <tr key={admin._id} className="hover:bg-gray-800">
                    <td className="border border-gray-700 px-4 py-2 text-center">
                      {admin.fileName ? (
                        <img
                          src={`http://localhost:7000/upload/${admin.fileName}`}
                          alt={admin.adminName}
                          className="w-10 h-10 object-cover rounded-full mx-auto"
                        />
                      ) : (
                        <FaUserCircle className="text-gray-500 text-3xl mx-auto" />
                      )}
                    </td>

                    <td className="border border-gray-700 px-4 py-2">
                      {admin.adminName}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {admin.theatreName}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {admin.email}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <div className="flex gap-4 justify-center items-center">
                        <button
                          onClick={() => setSelectedAdmin(admin)}
                          className="text-blue-400"
                        >
                          <FaEye size={18} />
                        </button>
                        <Link to={`/updateadmin/${admin._id}`}>
                          <button className="text-green-400">
                            <FaEdit size={18} />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(admin._id)}
                          className="text-red-400"
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

      {selectedAdmin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <button
              onClick={() => setSelectedAdmin(null)}
              className="text-white float-right"
            >
              ✖
            </button>
            <div className="text-left text-gray-200">
              {selectedAdmin.fileName ? (
                <img
                  src={`http://localhost:7000/upload/${selectedAdmin.fileName}`}
                  alt={selectedAdmin.adminName}
                  className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                />
              ) : (
                <FaUserCircle className="text-gray-500 text-9xl mx-auto mt-4" />
              )}

              <h2 className="text-xl text-center text-gray-50 font-semibold mt-4">
                {selectedAdmin.adminName}
              </h2>
              <p className="mt-2">Theatre: {selectedAdmin.theatreName}</p>
              <p className="mt-2">Email: {selectedAdmin.email}</p>
              <p className="mt-2">Phone: {selectedAdmin.mobileNumber}</p>
              <p className="mt-2">Location: {selectedAdmin.location}</p>
              <p className="mt-2">Pincode: {selectedAdmin.pincode}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
