import React, { useState } from "react";
import SidebarComponent from "../Components/Sidebar";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    screens: "",
    theatreName: "",
    theatreID: "",
    location: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Admin created successfully!");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        screens: "",
        theatreName: "",
        theatreID: "",
        location: "",
        pincode: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      screens: "",
      theatreName: "",
      theatreID: "",
      location: "",
      pincode: "",
    });
    setErrors({});
  };

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 ">
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 w-full">
      <div className="w-full mx-2 max-w-4xl">
        <div className="bg-white p-4 rounded-t-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Create Admin</h1>
        </div>

        <div className="bg-white p-8 rounded-b-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Admin Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile No.*
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Admin Mobile Number"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Admin Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="screens"
                  className="block text-sm font-medium text-gray-700"
                >
                  Screens*
                </label>
                <input
                  type="text"
                  id="screens"
                  name="screens"
                  value={formData.screens}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Number of Screens"
                />
                {errors.screens && (
                  <p className="text-red-500 text-sm">{errors.screens}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="theatreName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Theatre Name*
                </label>
                <input
                  type="text"
                  id="theatreName"
                  name="theatreName"
                  value={formData.theatreName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre Name"
                />
                {errors.theatreName && (
                  <p className="text-red-500 text-sm">{errors.theatreName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Theatre ID*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.theatreID}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre ID"
                />
                {errors.pincode && (
                  <p className="text-red-500 text-sm">{errors.theatreID}</p>
                )}
              </div>


              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre Location"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.location}</p>
                )}
              </div>


              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre Pincode"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.pincode}</p>
                )}
              </div>
    



            </div>

            
            <div className="mt-6 flex justify-between">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default CreateAdmin;
