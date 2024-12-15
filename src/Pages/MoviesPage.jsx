import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { MdPublish } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SidebarComponent from "../Components/Sidebar";

const MoviesPage = () => {
  const authToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
   

  const fetchMovie = async () => {
    try {
      await axios
        .get("http://localhost:7000/movie/superadmin/getallmovie",
           {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.error(res.data.Error)
          toast.success(res.data.Message) 
          setMovies(res.data.findAllMovies);

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
    fetchMovie();
  }, []);


  const handleDelete = async (_id , title) => {
    setMovies(movies.filter((_, i) => i !== _id));
    alert(`Deleted : ${title}`);
    try {
      await axios
        .delete(`http://localhost:7000/superadmin/delete/delete/?_id=${_id}`,
          {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.success(res.data.Message);
          setMovies((prevState) =>
            prevState.filter((value) => value._id !== _id)
          );
          fetchMovie()
        })
        .catch((err) => {
          toast.error(err.response.data.Message)
        });
    } catch (error) {
      console.log(error.message);
    }
  };


  const handlePublish = async (_id,title) => {
    setMovies(movies.filter((_, i) => i !== _id));
    alert(`Publish : ${title}`);
    try {
      const status = {status:"Published"}
      await axios
        .put(`http://localhost:7000/movie/superadmin/updatemovie/?_id=${_id}`,status,
          {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          toast.success(res.data.Message);
          setMovies((prevState) =>
            prevState.filter((value) => value._id !== _id)
          );
          fetchMovie();
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
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-4xl font-bold text-gray-100 mb-10 flex justify-between items-center">
          <span>Movies List</span>
        </div>

        <div className="space-y-8">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="flex flex-row bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 gap-8"
            >
              <img
                src={"http://localhost:7000/upload/"+movie.fileName}
                alt={`${movie.title} Poster`}
                className="w-48 h-72 object-cover rounded-xl border-4 border-gray-200"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-200 mb-4">{movie.title}</h2>
                  <p className="text-base text-gray-200 mb-6 italic">{movie.synopsis}</p>
                  <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-200">
                    <p>
                      <span className="font-semibold">Genre:</span> {movie.genre}
                    </p>
                    <p>
                      <span className="font-semibold">Language:</span> {movie.language}
                    </p>
                    <p>
                      <span className="font-semibold">Duration:</span> {movie.duration}
                    </p>
                    <p>
                      <span className="font-semibold">Release Date:</span> {movie.releaseDate}
                    </p>
                    <p>
                      <span className="font-semibold">Certificate:</span> {movie.certificate}
                    </p>
                    <p>
                      <span className="font-semibold">Director:</span> {movie.director}
                    </p>
                    <p>
                      <span className="font-semibold">Hero:</span> {movie.hero}
                    </p>
                    <p>
                      <span className="font-semibold">Heroine:</span> {movie.heroine}
                    </p>
                  </div>
                </div>


                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-6">
                    <button
                      className="bg-red-500 text-white px-4 h-10 rounded-lg font-medium hover:bg-red-400 transition duration-300 flex items-center gap-2"
                      onClick={() => handleDelete(movie._id)}
                    >
                      <FaTrashAlt />
                      Delete
                    </button>
                     <span
                        className={`flex items-center h-10 px-6 text-base text-white font-medium transition-colors rounded-md ${
                          movie.status==="pending"
                            ? "bg-orange-400"
                            : "bg-green-500"
                        }`}
                       >
                      {movie.status}
                     </span>
                    {
                      movie.status==="pending"?
                      <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-400 transition duration-300 flex items-center gap-2"
                      onClick={() => handlePublish(movie._id,movie.title)}
                    >
                      <MdPublish/>
                      Publish
                    </button>:
                    <></>
                    }
                   
                  </div>
                  {movie.trailerUrl && (
                    <Link to={movie.trailerUrl} target="_blank">
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-md font-medium hover:scale-105 transform transition duration-300">
                        Watch Trailer
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default MoviesPage;
