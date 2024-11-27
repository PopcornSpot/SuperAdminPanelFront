import React from "react";

const CustomerPage = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "sample@example.com",
      contact: "123-456-7890",
      activity: "Booked tickets for The Shawshank Redemption",
      image: "https://via.placeholder.com/150?text=John+Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "sample2@example.com",
      contact: "987-654-3210",
      activity: "Purchased snacks",
      image: "https://via.placeholder.com/150?text=Jane+Smith",
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert.brown@example.com",
      contact: "456-789-0123",
      activity: "Booked tickets for The Godfather",
      image: "https://via.placeholder.com/150?text=Robert+Brown",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      contact: "321-654-0987",
      activity: "Rated The Dark Knight 5 stars",
      image: "https://via.placeholder.com/150?text=Emily+Davis",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white shadow rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {customer.name}
              </h2>
              <p className="text-gray-600">{customer.email}</p>
              <p className="text-gray-600">{customer.contact}</p>
              <p className="text-gray-500 italic mt-2">
                "{customer.activity}"
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
