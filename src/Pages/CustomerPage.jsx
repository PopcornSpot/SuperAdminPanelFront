import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar";
import customerImage from "../assets/AdminImage.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaSearch } from "react-icons/fa";

const CustomerPage = () => {
  const [allUser, setAllUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get("https://popcornspotbackend-production.up.railway.app/user/getalluser");
      setAllUser(res.data.allUsers);
    } catch (error) {
      toast.error(error.response?.data?.Error || error.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const filteredUsers = allUser.filter(user => 
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SidebarComponent />
      <div className="ml-64 xl:ml-64 max-sm:ml-0 flex-1 p-5 bg-gray-900 min-h-screen">
        <div className="flex flex-col sm:flex-row gap-4 mt-16 sm:mt-0  items-center justify-between mb-4 px-1">
          <h1 className="text-3xl font-bold text-gray-200">Customers</h1>
          <div className="flex items-center bg-gray-800 p-2 rounded-lg shadow-md">
            <FaSearch className="text-gray-400 ml-2" />
            <input 
              type="text" 
              placeholder="Search customer..." 
              className="bg-transparent text-gray-200 ml-2 p-1 w-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-gray-200">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-2 border border-gray-600">Profile</th>
                <th className="p-2 border border-gray-600">Name</th>
                <th className="p-2 border border-gray-600">Email</th>
                <th className="p-2 border border-gray-600">Mobile</th>
                <th className="p-2 border border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-700">
                    <td className="p-2 border border-gray-600 text-center">
                      <img
                        src={user.fileName ? `https://popcornspotbackend-production.up.railway.app/upload/${user.fileName}` : customerImage}
                        alt={user.userName}
                        className="w-10 h-10 object-cover rounded-full mx-auto"
                      />
                    </td>
                    <td className="p-2 border border-gray-600 text-center">
                      {user.userName || "No username available"}
                    </td>
                    <td className="p-2 border border-gray-600 text-center">
                      {user.email || "No email available"}
                    </td>
                    <td className="p-2 border border-gray-600 text-center">
                      {user.mobileNumber || "No mobile number available"}
                    </td>
                    <td className="p-2 border border-gray-600 text-center">
                      <button onClick={() => setSelectedUser(user)} className="text-blue-500 hover:text-blue-700">
                        <FaEye size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-400">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
              <button onClick={() => setSelectedUser(null)} className="text-white float-right">✖</button>
              <div className="text-center">
                <img
                  src={selectedUser.fileName ? `https://popcornspotbackend-production.up.railway.app/upload/${selectedUser.fileName}` : customerImage}
                  alt={selectedUser.userName}
                  className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                />
                <h2 className="text-lg font-semibold text-gray-200 mt-4">{selectedUser.userName}</h2>
                <p className="text-gray-300">{selectedUser.email}</p>
                <p className="text-gray-300">{selectedUser.mobileNumber}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerPage;
