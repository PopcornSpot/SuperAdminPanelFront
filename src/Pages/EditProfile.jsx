import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SidebarComponent from "../Components/Sidebar";
import React, { useEffect, useState } from "react";



const initialState = {
    userName: "",
    mobileNumber: "",
    email: ""
};


const fetchDetailsForUpdate = async (_id,setDetails) => {
    try {
        console.log(_id ,setDetails)
        
      const authToken = localStorage.getItem("token");
      await axios
        .get(`http://localhost:7000/superadmin/getforupdate/?_id=${_id}`,
          {
            headers: { Authorization: `Bearer ${authToken}` }
          }
        )
        .then((res) => {
          toast.success(res.data.Message); 
          setDetails(res.data.superAdmin);
        })
        .catch((err) => {
          toast.error(err.response.data.Message)
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  


const EditProfile=()=>{

    const [UpdateAdmin, setUpdateAdmin] = useState(initialState);
    const navigate = useNavigate();
    const {_id} = useParams();
  
    const handleOnChange = (e) => {
      const { value, name } = e.target;
      setUpdateAdmin((prevState) => ({ ...prevState, [name]: value }));
    };
  


    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const authToken = localStorage.getItem("token");
          await axios.put(`http://localhost:7000/superadmin/updatesuperadmin/?_id=${_id}`, UpdateAdmin,
            {
              headers: { Authorization: `Bearer ${authToken}` }
            }
          )
          .then((res)=>{
            toast.success(res.data.Message);
            setUpdateAdmin(initialState);
            navigate("/profile") 
          })
          .catch((err)=>{
            toast.error(err.response.data.Message);
    
          })
        } 
        catch (error) {
          // console.log(error.message);
        }

        };

    
  useEffect(()=>{
   fetchDetailsForUpdate(_id,setUpdateAdmin);
  },[_id])


    const handleReset = () => {
        setUpdateAdmin(initialState);
      };


    return (
        <>
        <SidebarComponent/>
        <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 w-full">
          <div className="w-full mx-2 max-w-lg">
            <div className="bg-white p-4 rounded-t-lg shadow-md">
              <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
            </div>
    
            <div className="bg-white p-8 rounded-b-lg shadow-lg">
              <form 
              onSubmit={handleOnSubmit}
             onReset={handleReset}
               className="space-y-6 w-full">
                <div className="grid grid-cols-1  gap-6">
                  <div>
                    <label
                      htmlFor="userName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      required
                      value={UpdateAdmin.userName}
                      onChange={handleOnChange}
                      className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter Admin Name"
                    />
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
                      required
                      value={UpdateAdmin.email}
                      onChange={handleOnChange}
                      className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter Admin Email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile No.*
                    </label>
                    <input
                      type="number"
                      id="mobileNumber"
                      name="mobileNumber"
                      required
                      value={UpdateAdmin.mobileNumber}
                      onChange={handleOnChange}
                      className="mt-1 p-2 block w-full outline-none border border-gray-300 rounded focus:ring-orange-400 focus:border-orange-400"
                      placeholder="Enter Admin Mobile Number"
                    />
                  </div>
    
                 
    
                </div>
    
                <div className="mt-6 flex justify-between">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
                  >
                    Update
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


}


export default EditProfile;