import React from "react";
import Sidebar from "./Sidebar";
import StatsCard from "./StatsCard";
import InquiriesTable from "./InquiriesTable";
import TestDriveTable from "./TestDriveTable";
import "./admindashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <h1>Sales Staff Dashboard</h1>

        <div className="stats">

          <StatsCard title="Vehicles Available" value="45" color="#1976d2" />
          <StatsCard title="Customer Inquiries" value="12" color="#2e7d32" />
          <StatsCard title="Test Drive Requests" value="6" color="#f57c00" />
          <StatsCard title="My Sales" value="8" color="#c62828" />

        </div>

        <div className="tables">

          <InquiriesTable />
          <TestDriveTable />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;