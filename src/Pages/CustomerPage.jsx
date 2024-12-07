import React from "react";
import SidebarComponent from "../Components/Sidebar"

const CustomerPage = () => {
  const customers = [
    {
      id: 1,
      name: "Vignesh",
      email: "vignesh@gmail.com",
      contact: "9234567890",
      activity: "Booked tickets for The Kanguva",
      image: "https://wallpaperaccess.com/full/2562964.jpg",
    },
    {
      id: 2,
      name: "Delli Babu",
      email: "delli@gmail.com",
      contact: "9876543210",
      activity: "Booked tickets for The Kanguva",
      image: "https://c4.wallpaperflare.com/wallpaper/35/820/947/men-model-man-suit-hd-wallpaper-preview.jpg",
    },
    {
      id: 3,
      name: "Manighandan",
      email: "manighandan@gmail.com",
      contact: "9567890123",
      activity: "Booked tickets for The Kanguva",
      image: "https://wallpaperaccess.com/full/1448075.jpg",
    },
    {
      id: 4,
      name: "Mangal",
      email: "mangal@gmail.com",
      contact: "8216540987",
      activity: "Booked tickets for The Kanguva",
      image: "https://wallpapercave.com/wp/wp6967400.jpg",
    },
  ];

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-700"
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-200">
                {customer.name}
              </h2>
              <p className="text-gray-300">{customer.email}</p>
              <p className="text-gray-300">{customer.contact}</p>
              <p className="text-gray-300 italic mt-2">
                "{customer.activity}"
              </p>
              <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500">
                Delete Profile
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

export default CustomerPage;
