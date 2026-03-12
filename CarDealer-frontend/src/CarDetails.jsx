import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    message: ""
  });

  const [statusMessage, setStatusMessage] = useState("");

    const [testDriveData, setTestDriveData] = useState({
    customerName: "",
    email: "",
    preferredDate: ""
  });

  const [testDriveStatus, setTestDriveStatus] = useState("");


  useEffect(() => {
    fetch(`http://localhost:8084/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((error) => console.error("Error fetching car:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleTestDriveChange = (e) => {
    setTestDriveData({
      ...testDriveData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();

    const inquiryData = {
      customerName: formData.customerName,
      email: formData.email,
      message: formData.message,
      carId: Number(id)
    };

    try {
      const response = await fetch("http://localhost:8084/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inquiryData)
      });

      if (response.ok) {
        setStatusMessage("Inquiry submitted successfully.");
        setFormData({
          customerName: "",
          email: "",
          message: ""
        });
      } else {
        setStatusMessage("Failed to submit inquiry.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setStatusMessage("An error occurred while submitting the inquiry.");
    }
  };

  const handleSubmitTestDrive = async (e) => {
    e.preventDefault();

    const requestData = {
      customerName: testDriveData.customerName,
      email: testDriveData.email,
      preferredDate: testDriveData.preferredDate,
      carId: Number(id)
    };

    try {
      const response = await fetch("http://localhost:8084/api/test-drives", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        setTestDriveStatus("Test drive request submitted successfully.");
        setTestDriveData({
          customerName: "",
          email: "",
          preferredDate: ""
        });
      } else {
        setTestDriveStatus("Failed to submit test drive request.");
      }
    } catch (error) {
      console.error("Error submitting test drive request:", error);
      setTestDriveStatus("An error occurred while submitting the test drive request.");
    }
  };

  if (!car) return <h2>Loading...</h2>;

  return (
    <div>
      <Navbar />

      <div style={{ padding: "60px" }}>
        <h1>{car.name}</h1>

        <img
          src={`http://localhost:8084/images/${car.image}`}
          width="500px"
          alt={car.name}
        />

        <h2>${car.price}</h2>
        <p>{car.description}</p>

        <h3 style={{ marginTop: "30px" }}>Submit Inquiry</h3>

        <form onSubmit={handleSubmitInquiry} style={{ maxWidth: "500px" }}>
          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            value={formData.customerName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px"
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              height: "120px"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit Inquiry
          </button>
        </form>

        {statusMessage && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>
            {statusMessage}
          </p>
        )}

                <h3 style={{ marginTop: "40px" }}>Request Test Drive</h3>

        <form onSubmit={handleSubmitTestDrive} style={{ maxWidth: "500px" }}>
          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            value={testDriveData.customerName}
            onChange={handleTestDriveChange}
            required
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={testDriveData.email}
            onChange={handleTestDriveChange}
            required
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px"
            }}
          />

          <input
            type="date"
            name="preferredDate"
            value={testDriveData.preferredDate}
            onChange={handleTestDriveChange}
            required
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Request Test Drive
          </button>
        </form>

        {testDriveStatus && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>
            {testDriveStatus}
          </p>
        )}
      </div>
    </div>
  );
}

export default CarDetails;