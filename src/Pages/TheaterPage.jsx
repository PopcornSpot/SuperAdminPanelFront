import React from "react";
import SidebarComponent from "../Components/Sidebar";

const TheaterPage = () => {
  const theaters = [
    {
      id: 1,
      name: "Cineplex Mall Theater",
      location: "Pallavaram",
      screens: 10,
      amenities: ["IMAX", "3D",],
      image: "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11609146866114.jpg",
    },
    {
      id: 2,
      name: "Vidhya Cinemas",
      location: "Tambaram",
      screens: 7,
      amenities: ["Dolby Atmos", "3D"],
      image: "https://tamilagam.in/img/chennai-theatres.jpg",
    },
    {
      id: 3,
      name: "Sathyam Theaters",
      location: "Tambaram",
      screens: 5,
      amenities: ["IMAX","4D"],
      image: "https://cdn.dribbble.com/userupload/9446142/file/original-c7a2f12cc32d8a5d3f3cb0dde12ed49d.jpg",
    },
    {
      id: 4,
      name: "Vettri Cinema",
      location: "Chrompet",
      screens: 8,
      amenities: ["IMAX", "Dolby Surround"],
      image: "https://cdn3.ticketnew.com/partners/img/Murugan_Cinemas/2023/red.jpg",
    },
  ];

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Theaters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {theaters.map((theater) => (
          <div
            key={theater.id}
            className="bg-white shadow rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={theater.image}
              alt={theater.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {theater.name}
              </h2>
              <p className="text-gray-600">Location: {theater.location}</p>
              <p className="text-gray-600">Screens: {theater.screens}</p>
              <p className="text-gray-600">Amenities:</p>
              <ul className="list-disc list-inside text-gray-600">
                {theater.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
              <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500">
                View Details
              </button>
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
