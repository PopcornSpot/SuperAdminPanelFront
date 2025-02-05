import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../assets/logo.png';

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("https://popcornspotbackend-production.up.railway.app/superadmin/login", formData)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          toast.success(res.data.Message);
          setFormData(initialState);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[90%] sm:w-full max-w-md">
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="Logo"
            className="w-24 h-20 sm:w-36 sm:h-20 object-contain"
          />
        </div>

        {/* <h1 className="text-3xl font-bold text-center mb-6 text-orange-400">
          Login
        </h1> */}
        <form onSubmit={handleOnSubmit} onReset={handleReset}>
          <div className="mb-5">
            <label className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-300 font-semibold mb-2">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Forgot your password?{" "}
          <Link
            to={"/forgot"}
            className="text-orange-400 font-semibold underline hover:text-orange-500"
          >
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
