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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {theatres.map((theatre) => (
              <div
                key={theatre._id}
                className="bg-gradient-to-b from-gray-800 to-gray-700 border border-gray-600 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={"http://localhost:7000/upload/" + theatre.fileName}
                  alt={theatre.theatreName}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold text-white mb-3">
                    {theatre.theatreName}
                  </h2>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <strong>Address:</strong> {theatre.address}
                    </p>
                    <p>
                      <strong>City:</strong> {theatre.city}
                    </p>
                    <p>
                      <strong>State:</strong> {theatre.state}
                    </p>
                    <p>
                      <strong>Country:</strong> {theatre.country}
                    </p>
                    <p>
                      <strong>Zip Code:</strong> {theatre.zipCode}
                    </p>
                    <p>
                      <strong>Phone:</strong> {theatre.phone}
                    </p>
                    <p>
                      <strong>Email:</strong> {theatre.email}
                    </p>
                    <p>
                      <strong>No of Screens:</strong> {theatre.screens}
                    </p>
                    <p>
                      <strong>Screen Type:</strong> {theatre.screenType}
                    </p>
                    <p>
                      <strong>Facilities:</strong>{" "}
                      {theatre.facilities.join(", ")}
                    </p>
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

export default TheaterPage;
