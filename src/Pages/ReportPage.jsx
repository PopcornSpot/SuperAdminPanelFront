import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SidebarComponent from "../Components/SideBar";
import { FaSearch } from 'react-icons/fa';

const fetchAllReports = async (setReports) => {
  try {
    const authToken = localStorage.getItem("token");
    await axios
      .get(`https://popcornspotbackend-production.up.railway.app/report/superadmin/getallreports`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((res) => {
        toast.error(res.data.Error);
        const allreports = res.data.allReports;
        const filteredReports = allreports.filter(
          (report) => report.role == "admin"
        );
        setReports(filteredReports);
      })
      .catch((err) => {
        toast.error(err.response.data.Message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

const ReportPage = () => {
  const [reports, setReports] = useState([]);
  const [reportData, setReportData] = useState({});
  const [viewmode, setViewmode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const authToken = localStorage.getItem("token");

  const handleStatusChange = async (_id, name) => {
    toast.info(`Viewing ${name} Report`); // Changed alert to toast
    try {
      await axios
        .get(`https://popcornspotbackend-production.up.railway.app/report/superadmin/getsinglereport/?_id=${_id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          toast.error(res.data.Error);
          setReportData(res.data.reports);
        })
        .catch((err) => {
          toast.error(err.response.data.Message);
        });
    } catch (error) {
      console.log(error.message);
    }
    setViewmode(true);
  };

  const updateStatus = async (_id, name) => {
    toast.info(`Updating ${name} Report`); // Changed alert to toast
    const data = {
      ...reportData,
      status: "Resolved",
    };
    try {
      await axios
        .put(
          `https://popcornspotbackend-production.up.railway.app/report/superadmin/updatereport/?_id=${_id}`,
          data,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.Message);
          toast.error(res.data.Error);
        })
        .catch((err) => {
          toast.error(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
    setViewmode(false);
    fetchAllReports(setReports);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchAllReports(setReports);
  }, []);

  // Filter reports based on the search term (by subject or name)
  const filteredReports = reports.filter((report) =>
    report.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SidebarComponent />
      <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1 p-5 bg-gray-900">
        <div className="p-6 bg-gradient-to-b relative from-gray-800 to-gray-900 min-h-screen">
          <div className="max-w-6xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
            <div className=" flex items-start justify-between w-full h-full">
              <h1 className="text-3xl font-semibold text-gray-200 mb-6">
                Report Page
              </h1>
              {/* Search bar */}
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Subject or Name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="bg-transparent text-gray-300 placeholder-gray-400 outline-none"
                />
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="w-full table-auto text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-left">
                    <th className="p-4 text-sm font-medium">Name</th>
                    <th className="p-4 text-sm font-medium">Report Title</th>
                    <th className="p-4 text-sm font-medium">Description</th>
                    <th className="p-4 text-sm font-medium">Status</th>
                    <th className="p-4 text-sm font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.length !== 0 ? (
                    filteredReports.map((report) => (
                      <tr
                        key={report._id}
                        className="border-t hover:bg-gray-700 transition-colors"
                      >
                        <td className="p-4">{report.name}</td>
                        <td className="p-4">{report.subject}</td>
                        <td className="p-4">{report.message}</td>
                        <td className="p-4">
                          <span
                            className={`inline-block px-4 py-2 rounded-md font-medium text-sm ${
                              report.status === "Pending"
                                ? "bg-orange-400 text-black"
                                : "bg-green-500 text-white"
                            }`}
                          >
                            {report.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <button
                            className="text-center w-24 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-200"
                            onClick={() =>
                              handleStatusChange(report._id, report.name)
                            }
                          >
                            {report.status === "Pending" ? " View " : "Reopen"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p className="px-2 py-5 w-full">No reports found</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {viewmode ? (
            <>
              <div className=" w-full absolute top-0 bottom-0 right-0 left-0 mx-auto bg-gray-800 p-8 rounded-xl shadow-xl flex justify-center items-start">
                <div className="max-w-4xl mx-auto p-6 w-full bg-white shadow-md rounded-lg mt-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Report Details
                  </h2>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Name:</label>
                    <p className="text-gray-600">{reportData.name || "N/A"}</p>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Email:</label>
                    <p className="text-gray-600">{reportData.email || "N/A"}</p>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Mobile Number:</label>
                    <p className="text-gray-600">{reportData.mobileNumber || "N/A"}</p>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Subject:</label>
                    <p className="text-gray-600">{reportData.subject || "N/A"}</p>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Message:</label>
                    <p className="text-gray-600">{reportData.message || "N/A"}</p>
                  </div>
                  <div className="mb-4 flex gap-5">
                    {reportData.status !== "Resolved" ? (
                      <button
                        className="px-2 py-1 bg-gray-400 text-white"
                        onClick={() => updateStatus(reportData._id, reportData.name)}
                      >
                        Resolved
                      </button>
                    ) : (
                      <></>
                    )}
                    <button
                      className="px-2 py-1 bg-gray-400 text-white"
                      onClick={() => setViewmode(false)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ReportPage;
