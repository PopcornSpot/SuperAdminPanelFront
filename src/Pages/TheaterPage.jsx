import React from "react";

const TheaterPage = () => {
  const theaters = [
    {
      id: 1,
      name: "Cineplex Mall Theater",
      location: "Downtown",
      screens: 10,
      amenities: ["IMAX", "3D", "Snacks", "Luxury Seating"],
      image: "https://via.placeholder.com/300x200?text=Cineplex+Mall+Theater",
    },
    {
      id: 2,
      name: "Galaxy Cinemas",
      location: "Uptown",
      screens: 7,
      amenities: ["Dolby Atmos", "Snacks", "3D"],
      image: "https://via.placeholder.com/300x200?text=Galaxy+Cinemas",
    },
    {
      id: 3,
      name: "Regal Theaters",
      location: "Midtown",
      screens: 5,
      amenities: ["Recliner Seats", "Snacks", "4DX"],
      image: "https://via.placeholder.com/300x200?text=Regal+Theaters",
    },
    {
      id: 4,
      name: "Star Cinema",
      location: "City Center",
      screens: 8,
      amenities: ["IMAX", "Luxury Seating", "Dolby Surround"],
      image: "https://via.placeholder.com/300x200?text=Star+Cinema",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Theaters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheaterPage;
