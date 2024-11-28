import React, { useState } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
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
    <div className={`p-6 bg-gray-100 min-h-screen relative w-full`}>
      <h1 className="text-2xl font-bold text-black mb-6">Create Admin</h1>
      <div className={`absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center`}>
        <form
          className={`bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full`}
          onSubmit={handleSubmit}
        >
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter admin name"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 outline-none`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Mobile Field */}
            <div>
              <label htmlFor="mobile" className="block font-medium text-gray-700">
                Mobile No*
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter mobile number"
                className={`w-full p-2 mt-2 border border-gray-300 outline-none rounded focus:ring-2 focus:ring-blue-400 `}
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Screens Field */}
            <div>
              <label htmlFor="screens" className="block font-medium text-gray-700">
                Screens*
              </label>
              <input
                type="text"
                id="screens"
                name="screens"
                placeholder="Enter number of screens"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400`}
                value={formData.screens}
                onChange={handleChange}
                required
              />
              {errors.screens && <p className="text-red-500 text-sm mt-1">{errors.screens}</p>}
            </div>

            {/* Theatre Name */}
            <div>
              <label htmlFor="theatreName" className="block font-medium text-gray-700">
                Theatre Name*
              </label>
              <input
                type="text"
                id="theatreName"
                name="theatreName"
                placeholder="Enter theatre name"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400`}
                value={formData.theatreName}
                onChange={handleChange}
                required
              />
              {errors.theatreName && <p className="text-red-500 text-sm mt-1">{errors.theatreName}</p>}
            </div>

            {/* Theatre ID */}
            <div>
              <label htmlFor="theatreID" className="block font-medium text-gray-700">
                Theatre ID*
              </label>
              <input
                type="text"
                id="theatreID"
                name="theatreID"
                placeholder="Enter theatre ID"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400`}
                value={formData.theatreID}
                onChange={handleChange}
                required
              />
              {errors.theatreID && <p className="text-red-500 text-sm mt-1">{errors.theatreID}</p>}
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block font-medium text-gray-700">
                Theatre Location*
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400`}
                value={formData.location}
                onChange={handleChange}
                required
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            {/* Pincode */}
            <div>
              <label htmlFor="pincode" className="block font-medium text-gray-700">
                Pincode*
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Enter pincode"
                className={`w-full p-2 mt-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400`}
                value={formData.pincode}
                onChange={handleChange}
                required
              />
              {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;
