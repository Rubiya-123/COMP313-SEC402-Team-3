import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function ViewTestDrives() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8084/api/test-drives")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((error) =>
        console.error("Error fetching test drive requests:", error)
      );
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Staff Test Drive Requests</h1>

        {requests.length === 0 ? (
          <p>No test drive requests found.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ background: "#f2f2f2" }}>
                <th style={cellStyle}>ID</th>
                <th style={cellStyle}>Customer Name</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Preferred Date</th>
                <th style={cellStyle}>Car ID</th>
                <th style={cellStyle}>Status</th>
                <th style={cellStyle}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td style={cellStyle}>{req.id}</td>
                  <td style={cellStyle}>{req.customerName}</td>
                  <td style={cellStyle}>{req.email}</td>
                  <td style={cellStyle}>{req.preferredDate}</td>
                  <td style={cellStyle}>{req.carId}</td>
                  <td style={cellStyle}>{req.status}</td>
                  <td style={cellStyle}>{req.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

export default ViewTestDrives;
