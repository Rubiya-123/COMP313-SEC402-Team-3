import React from "react";
import { useNavigate } from "react-router-dom";
import ManageVehicles from "./ManageVehicles";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h3 className="logo">Car Dealership</h3>

      <ul>
        <li onClick={() => navigate("/Dashboard")}>Dashboard</li>

        <li onClick={() => navigate("/manage-vehicles")}>
          Manage Vehicle
        </li>

        <li onClick={() => navigate("/inquiries")}>
          Inquiries
        </li>

        <li onClick={() => navigate("/test-drives")}>
          Test Drives
        </li>

        <li onClick={() => navigate("/admin")}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;