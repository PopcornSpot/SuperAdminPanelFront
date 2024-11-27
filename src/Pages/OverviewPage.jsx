import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";

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
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      </div>
      <div className="w-full flex items-center justify-center gap-8">
        {OverviewDetail.map((value, index) => (
          <div
            key={index}
            className="h-[150px] w-[200px] flex items-center justify-center flex-col gap-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:translate-y-2 duration-100 cursor-pointer"
          >
            <h3 className="text-gray-600 text-sm font-medium">{value.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{value.value}</p>
            <p
              className={`text-sm font-medium ${
                value.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {value.change} since last month
            </p>
          </div>
        ))}
      </div>

      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Monthly Revenue</h2>
          <LineChart
            width={500}
            height={300}
            data={revenueData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </div>

       
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Daily Users</h2>
          <BarChart
            width={500}
            height={300}
            data={usersData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-800 font-medium">Subhashini purchased tickets for Amaran</p>
            <span className="text-gray-500 text-sm">5 minutes ago</span>
          </li>
          <li className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-800 font-medium">New user registered.</p>
            <span className="text-gray-500 text-sm">10 minutes ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewPage;
