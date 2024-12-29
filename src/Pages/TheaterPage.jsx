import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";

const TheaterPage = () => {
  const [theatres, setTheatres] = useState([]);
  const authToken = localStorage.getItem("token");

  const fetchTheatre = async () => {
    try {
      await axios
        .get("http://localhost:7000/theatre/superadmin/get", {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          toast.error(res.data.Error);
          toast.success(res.data.Message);
          setTheatres(res.data.theatres);
        })
        .catch((err) => {
          if (err.status === 401) {
            return toast.error("Request to Login Again");
          }
          toast.error(err.response.data.Error);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchTheatre();
  }, []);

  return (
    <>
      <SidebarComponent />
      <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
        <div className="p-6 bg-gray-900 min-h-screen">
          <h1 className="text-4xl font-extrabold text-white mb-6 pl-5">
            Theaters
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-600 text-gray-200">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 px-4 py-2">Name</th>
                  <th className="border border-gray-600 px-4 py-2">Address</th>
                  <th className="border border-gray-600 px-4 py-2">City</th>
                  <th className="border border-gray-600 px-4 py-2">State</th>
                  <th className="border border-gray-600 px-4 py-2">Zip Code</th>
                  <th className="border border-gray-600 px-4 py-2">Phone</th>
                  <th className="border border-gray-600 px-4 py-2">Email</th>
                  <th className="border border-gray-600 px-4 py-2">Screens</th>
                  <th className="border border-gray-600 px-4 py-2">Screen Type</th>
                  <th className="border border-gray-600 px-4 py-2">Facilities</th>
                </tr>
              </thead>
              <tbody>
                {theatres.map((theatre) => (
                  <tr
                    key={theatre._id}
                    className="hover:bg-gray-800 transition duration-200"
                  >
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.theatreName}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.address}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.city}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.state}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.zipCode}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.phone}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.email}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.screens}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.screenType}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {theatre.facilities.join(", ")}
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

export default TheaterPage;
