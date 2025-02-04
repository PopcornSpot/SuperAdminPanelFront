import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaSearch } from "react-icons/fa";

const TheaterPage = () => {
  const [theatres, setTheatres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const authToken = localStorage.getItem("token");

  const fetchTheatre = async () => {
    try {
      const res = await axios.get("https://popcornspotbackend-production.up.railway.app/theatre/superadmin/get", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      toast.success(res.data.Message);
      setTheatres(res.data.theatres);
    } catch (error) {
      toast.error(error.response?.data?.Error || error.message);
    }
  };

  useEffect(() => {
    fetchTheatre();
  }, []);

  const filteredTheatres = theatres.filter((theatre) =>
    theatre.theatreName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SidebarComponent />
      <div className="ml-60 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900 min-h-screen">
        <div className="p-6 bg-gray-900 mt-12 sm:mt-0">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-white">Theaters</h1>
            <div className="flex items-center bg-gray-800 p-2 rounded-lg shadow-md">
              <FaSearch className="text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search theater..."
                className="bg-transparent text-gray-200 ml-2 p-1 w-full focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {theatres.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">No theaters available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-gray-600 text-gray-200">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="border border-gray-600 px-4 py-2">Profile</th>
                    <th className="border border-gray-600 px-4 py-2">Name</th>
                    <th className="border border-gray-600 px-4 py-2">City</th>
                    <th className="border border-gray-600 px-4 py-2">State</th>
                    <th className="border border-gray-600 px-4 py-2">Screens</th>
                    <th className="border border-gray-600 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTheatres.length > 0 ? (
                    filteredTheatres.map((theatre) => (
                      <tr key={theatre._id} className="hover:bg-gray-800 transition duration-200">
                        <td className="p-2 border border-gray-600 text-center">
                          <img
                            src={theatre.fileName ? `https://popcornspotbackend-production.up.railway.app/upload/${theatre.fileName}` : "No Image"}
                            alt={theatre.theatreName}
                            className="w-10 h-10 object-cover rounded-full mx-auto"
                          />
                        </td>
                        <td className="border border-gray-600 px-4 py-2">{theatre.theatreName}</td>
                        <td className="border border-gray-600 px-4 py-2">{theatre.city}</td>
                        <td className="border border-gray-600 px-4 py-2">{theatre.state}</td>
                        <td className="border border-gray-600 px-4 py-2">{theatre.screens}</td>
                        <td className="border border-gray-600 px-4 py-2 text-center">
                          <button onClick={() => setSelectedTheatre(theatre)} className="text-blue-500 hover:text-blue-700">
                            <FaEye size={20} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-4 text-center text-gray-400">No theaters found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selectedTheatre && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <button onClick={() => setSelectedTheatre(null)} className="text-white float-right">✖</button>
            <div className="text-left text-gray-200">
              <img
                src={selectedTheatre.fileName ? `https://popcornspotbackend-production.up.railway.app/upload/${selectedTheatre.fileName}` : "No Image"}
                alt={selectedTheatre.theatreName}
                className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
              />
              <h2 className="text-xl text-center text-gray-50 font-semibold mt-4">{selectedTheatre.theatreName}</h2>
              <p className="mt-2">Address: {selectedTheatre.address}, {selectedTheatre.city}, {selectedTheatre.state} - {selectedTheatre.zipCode}.</p>
              <p className="mt-2">Phone: {selectedTheatre.phone}</p>
              <p className="mt-2">Email: {selectedTheatre.email}</p>
              <p className="mt-2">Screens: {selectedTheatre.screens}</p>
              <p className="mt-2">Screen Type: {selectedTheatre.screenType}</p>
              <p className="mt-2">Facilities: {selectedTheatre.facilities.join(", ")}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TheaterPage;