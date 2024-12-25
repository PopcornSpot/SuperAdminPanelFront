import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SidebarComponent from "../Components/SideBar";

const initialState={
  title: "",
  image: null,
}

const fetchBannerForUpdate = async (_id,setBanner) => {
  try {
    const authToken = localStorage.getItem("token");
    await axios
      .get(`http://localhost:7000/banner/getonebanner/?_id=${_id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` }
        }
      )
      .then((res) => {
        toast.success(res.data.Message);
        toast.error(res.data.Error)
        setBanner(res.data.oneBanner);
      })
      .catch((err) => {
        toast.error(err.response.data.Message)
      });
  } catch (error) {
    console.log(error.message);
  }
};



const AddBannerForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [bannerEdit, setBannerEdit] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
      ...(type === "file" && { fileOriginalName: files[0]?.name || "" }),
    }));
  };



  const handleSubmit = async (e) => {
    const authToken = localStorage.getItem("token");
    e.preventDefault();
    let uploadData = new FormData();
    Object.keys(formData).forEach((key) => {
      uploadData.append(key, formData[key]);
    });


    try {
      bannerEdit ?
        await axios.put(`http://localhost:7000/banner/updatebanner/?_id=${_id}`, uploadData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
          .then((res) => {
            toast.success(res.data.Message);
            toast.error(res.data.Error)
            setFormData(initialState);
            navigate("/herosection")
          })
          .catch((err) => {
            toast.error(err.response.data.Message);

          }) :
        await axios
          .post("http://localhost:7000/banner/addbanner", uploadData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${authToken}`,
            },
          })
          .then((res) => {
            toast.success(res.data.Message);
            toast.error(res.data.Error)
            setFormData(initialState);
            navigate("/herosection");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.Message);
          });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_id) {
      setBannerEdit(true);
      fetchBannerForUpdate(_id, setFormData)
    }
    else {
      setBannerEdit(false);
    }
  }, [_id])





  return (
    <>
      <SidebarComponent />
      <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-lg p-6 bg-gray-500 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            {bannerEdit ? "Update Banner" : "Add Banner"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div>
              <label className="block font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter banner title"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Poster</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full mt-1"
                accept="image/*"
              />
              {formData.fileOriginalName && (
                <p className="text-lg mt-4">{formData.fileOriginalName}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-400 text-white font-bold rounded-md hover:bg-orange-500"
            >
              {bannerEdit ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBannerForm;
