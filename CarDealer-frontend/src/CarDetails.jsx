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
      </div>
    </div>
  );
}

export default CarDetails;