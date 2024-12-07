import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";
import SidebarComponent from "../Components/Sidebar";

const OverviewPage = () => {
  const OverviewDetail = [
    { title: "Total Users", value: "100", change: "+12%" },
    { title: "Tickets Sold", value: "100", change: "+8%" },
    { title: "Revenue", value: "RS-4000", change: "+15%" },
    { title: "Movies", value: "5", change: "-2%" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 100 },
    { month: "Feb", revenue: 200 },
    { month: "Mar", revenue: 300 },
    { month: "Apr", revenue: 400 },
    { month: "May", revenue: 500 },
  ];

  const usersData = [
    { day: "Mon", users: 100 },
    { day: "Tue", users: 200 },
    { day: "Wed", users: 300 },
    { day: "Thu", users: 400 },
    { day: "Fri", users: 500 },
  ];

  return (
    <>
      <SidebarComponent />
      <div className="ml-52 xl:ml-60 max-sm:ml-0 flex-1">
        <div className="p-6 bg-gray-900 w-full min-h-screen">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-200">Dashboard Overview</h1>
          </div>
          <div className="w-full flex items-center flex-wrap justify-center gap-6">
            {OverviewDetail.map((value, index) => (
              <div
                key={index}
                className="h-[150px] w-[200px] flex items-center justify-center flex-col gap-3 bg-gray-800 shadow-md hover:bg-gray-700 hover:shadow-lg duration-150 rounded-lg cursor-pointer"
              >
                <h3 className="text-gray-400 text-sm font-medium">{value.title}</h3>
                <p className="text-2xl font-bold text-gray-100">{value.value}</p>
                <p
                  className={`text-sm font-medium ${
                    value.change.startsWith("+") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {value.change} since last month
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-gray-800 w-full h-[500px] max-sm:h-[350px] pb-16 shadow-lg rounded-lg p-6 max-sm:px-1">
              <h2 className="text-lg font-bold text-gray-300 mb-4">Monthly Revenue</h2>
              <ResponsiveContainer>
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis dataKey="month" tick={{ fill: "#9ca3af" }} />
                  <YAxis tick={{ fill: "#9ca3af" }} />
                  <Tooltip contentStyle={{ backgroundColor: "#374151", color: "#e5e7eb" }} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#f59e0b" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800 w-full h-[500px] max-sm:h-[350px] shadow-lg rounded-lg p-6 max-sm:pb-16 pb-16 max-sm:p-2">
              <h2 className="text-lg font-bold text-gray-300 mb-4">Daily Users</h2>
              <ResponsiveContainer>
                <BarChart
                  data={usersData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis dataKey="day" tick={{ fill: "#9ca3af" }} />
                  <YAxis tick={{ fill: "#9ca3af" }} />
                  <Tooltip contentStyle={{ backgroundColor: "#374151", color: "#e5e7eb" }} />
                  <Legend />
                  <Bar dataKey="users" fill="#fb923c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="bg-gray-800 shadow-md p-4 rounded-lg hover:bg-gray-700 hover:shadow-lg duration-150">
                <p className="text-gray-200 font-medium">Subhashini purchased tickets for Amaran</p>
                <span className="text-gray-400 text-sm">5 minutes ago</span>
              </li>
              <li className="bg-gray-800 shadow-md p-4 rounded-lg hover:bg-gray-700 hover:shadow-lg duration-150">
                <p className="text-gray-200 font-medium">New user registered.</p>
                <span className="text-gray-400 text-sm">10 minutes ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
