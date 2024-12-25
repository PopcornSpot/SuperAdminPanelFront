import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const HeroSection = () => {
  const authToken = localStorage.getItem("token");
  const [banner, setBanner] = useState([]); 

  const fetchBanner = async () => {
    try {
      await axios
        .get("http://localhost:7000/banner/getallbanner",
           {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.error(res.data.Error) 
          setBanner(res.data.allBanner);
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
    fetchBanner();
  }, []);


  const handleDelete = async (_id , title) => {
    setBanner(banner.filter((_, i) => i !== _id));
    alert(`Delete : ${title}`);
    try {
      await axios
        .delete(`http://localhost:7000/banner/deletebanner/?_id=${_id}`,
          {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.success(res.data.Message);
          setBanner((prevState) =>
            prevState.filter((value) => value._id !== _id)
          );
        })
        .catch((err) => {
          toast.error(err.response.data.Message)
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 min-h-screen bg-gray-900">
    <div className="text-3xl font-bold h-20 text-gray-100 mb-4 px-6 flex justify-between items-center">
          <span>Hero Section</span>
          <Link to={"/addbanner"}>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg shadow-lg text-lg font-medium flex items-center gap-2 hover:scale-105 transform transition duration-300">
            Add Banner
            <FaPlus className="text-white" />
          </button>
          </Link>
        </div>
    <div className="grid grid-cols-2 gap-4 p-4 "> 
      {banner.map((card) => (
        <div
          key={card._id}
          className="border rounded shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={"http://localhost:7000/upload/"+card.fileName}
            alt={card.title}
            className="w-full h-56 object-cover rounded"
          />
          <h3 className="text-lg text-gray-50 font-semibold mt-4">{card.title}</h3>
          <div className="flex gap-2 mt-4">
          <Link to={`/updatebanner/${card._id}`} >
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            </Link>
            <button
              onClick={() => handleDelete(card._id,card.title)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default HeroSection;
