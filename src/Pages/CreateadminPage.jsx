import React, { useEffect, useState } from "react";
import SidebarComponent from "../Components/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";




const initialState = {
    adminName: "",
    mobileNumber: "",
    email: "",
    noOfTheatres: "",
    theatreName: "",
    theatreID: "",
    location: "",
    pincode: "",
};

const fetchAdminForUpdate = async (_id,setForm) => {
  try {
    const authToken = localStorage.getItem("token");
    await axios
      .get(`http://localhost:7000/admin/superadmin/getsingleadmin/?_id=${_id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` }
        }
      )
      .then((res) => {
        toast.success(res.data.Message); 
        setForm(res.data.singleAdmin);
      })
      .catch((err) => {
        toast.error(err.response.data.Message)
      });
  } catch (error) {
    console.log(error.message);
  }
};


  const CreateAdmin = () => {
  const [formData, setFormData] = useState(initialState);
  const [adminEdit,setAdminEdit]=useState(false);
  const navigate = useNavigate();
  const {_id} = useParams();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("token");
      console.log("token",authToken);
      
      adminEdit?  
      await axios.put(`http://localhost:7000/admin/superadmin/updateadmin/?_id=${_id}`, formData,
        {
          headers: { Authorization: `Bearer ${authToken}` }
        }
      )
      .then((res)=>{
        toast.success(res.data.Message);
        setFormData(initialState);
        navigate("/admin") 
      })
      .catch((err)=>{
        toast.error(err.response.data.Message);

      })
      :
      await axios
        .post("http://localhost:7000/admin/superadmin/register", formData,
          {
            headers: { Authorization: `Bearer ${authToken}` }
          }
        )
        .then((res) => {
          toast.success(res.data.Message);
          setFormData(initialState);
          navigate("/admin")
        })
        .catch((err) => {
          toast.error(err.response.data.Message);
        });
    } 
    catch (error) {
      console.log(error.message);
    }
  };


  useEffect(()=>{
    if(_id) {
      setAdminEdit(true);
      fetchAdminForUpdate(_id,setFormData)
    }
    else{
      setAdminEdit(false);
    }
  },[_id])



  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <>
    <SidebarComponent/>
    <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 w-full">
      <div className="w-full mx-2 max-w-4xl">
        <div className="bg-gray-800 p-4 rounded-t-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-100">Create Admin</h1>
        </div>

        <div className="bg-gray-800 p-8 rounded-b-lg shadow-lg">
          <form onSubmit={handleOnSubmit} onReset={handleReset}
           className="space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="adminName"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="adminName"
                  name="adminName"
                  required
                  value={formData.adminName}
                  onChange={handleOnChange}
                  className="mt-1 p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Admin Name"
                />
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-300"
                >
                  Mobile No.*
                </label>
                <input
                  type="number"
                  id="mobileNumber"
                  name="mobileNumber"
                  required
                  value={formData.mobileNumber}
                  onChange={handleOnChange}
                  className="mt-1 no-spinner p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Admin Mobile Number"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleOnChange}
                  className="mt-1 p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Admin Email"
                />
              </div>

              <div>
                <label
                  htmlFor="noOfTheatres"
                  className="block text-sm font-medium text-gray-300"
                >
                 Theatres*
                </label>
                <input
                  type="number"
                  id="noOfTheatres"
                  name="noOfTheatres"
                  required
                  value={formData.noOfTheatres}
                  onChange={handleOnChange}
                  className="mt-1 no-spinner p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Number of Theatres"
                />
              </div>

              <div>
                <label
                  htmlFor="theatreName"
                  className="block text-sm font-medium text-gray-300"
                >
                  Theatre Name*
                </label>
                <input
                  type="text"
                  id="theatreName"
                  name="theatreName"
                  required
                  value={formData.theatreName}
                  onChange={handleOnChange}
                  className="mt-1 p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre Name"
                />
              </div>

              <div>
                <label
                  htmlFor="theatreID"
                  className="block text-sm font-medium text-gray-300"
                >
                  Theatre ID*
                </label>
                <input
                  type="text"
                  id="theatreID"
                  name="theatreID"
                  required
                  value={formData.theatreID}
                  onChange={handleOnChange}
                  className="mt-1 p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre ID"
                />
              </div>


              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-300"
                >
                  Location*
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleOnChange}
                  className="mt-1 p-2 block w-full outline-none border border-none rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre Location"
                />
              </div>


              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-300"
                >
                  Pincode*
                </label>
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleOnChange}
                  className="mt-1 no-spinner p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Theatre Pincode"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
              >
                 {adminEdit? "Update" : "Submit"}
              </button>
              <button
                type="reset"
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
