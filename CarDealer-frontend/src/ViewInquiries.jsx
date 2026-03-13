import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function ViewInquiries() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8084/api/inquiries")
      .then((res) => res.json())
      .then((data) => setInquiries(data))
      .catch((error) => console.error("Error fetching inquiries:", error));
  }, []);

  return (
     <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "40px", flex: 1 }}>
        <h1>Staff Inquiry View</h1>

        {inquiries.length === 0 ? (
          <p>No inquiries found.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px"
            }}
          >
            <thead>
              <tr style={{ background: "#f2f2f2" }}>
                <th style={cellStyle}>ID</th>
                <th style={cellStyle}>Customer Name</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Message</th>
                <th style={cellStyle}>Car ID</th>
                <th style={cellStyle}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id}>
                  <td style={cellStyle}>{inquiry.id}</td>
                  <td style={cellStyle}>{inquiry.customerName}</td>
                  <td style={cellStyle}>{inquiry.email}</td>
                  <td style={cellStyle}>{inquiry.message}</td>
                  <td style={cellStyle}>{inquiry.carId}</td>
                  <td style={cellStyle}>{inquiry.createdAt}</td>
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
  textAlign: "left"
};

export default ViewInquiries;