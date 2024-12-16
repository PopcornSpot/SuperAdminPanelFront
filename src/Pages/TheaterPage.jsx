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
        .get("http://localhost:7000/theatre/superadmin/get",
           {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.error(res.data.Error)
          toast.success(res.data.Message) 
          setTheatres(res.data.theatres);

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
    fetchTheatre();
  }, []);

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Theaters</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {theatres.map((theatre) => (
        <div
          key={theatre._id}
          className="bg-white border border-gray-300 rounded-lg shadow-md p-4 max-w-sm"
        >
          <img
            src={"http://localhost:7000/upload/"+theatre.fileName || image }
            alt={theatre.theatreName}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{theatre.theatreName}</h2>
          <p className="text-sm text-gray-600"><strong>Address:</strong> {theatre.address}</p>
          <p className="text-sm text-gray-600"><strong>City:</strong> {theatre.city}</p>
          <p className="text-sm text-gray-600"><strong>State:</strong> {theatre.state}</p>
          <p className="text-sm text-gray-600"><strong>Country:</strong> {theatre.country}</p>
          <p className="text-sm text-gray-600"><strong>Zip Code:</strong> {theatre.zipCode}</p>
          <p className="text-sm text-gray-600"><strong>Phone:</strong> {theatre.phone}</p>
          <p className="text-sm text-gray-600"><strong>Email:</strong> {theatre.email}</p>
          <p className="text-sm text-gray-600"><strong>No of Screens:</strong> {theatre.screens}</p>
          <p className="text-sm text-gray-600"><strong>Screen Type:</strong> {theatre.screenType}</p>
          <p className="text-sm text-gray-600"><strong>Facilities:</strong> {theatre.facilities.join(", ")}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
    </>
  );
};

export default TheaterPage;
