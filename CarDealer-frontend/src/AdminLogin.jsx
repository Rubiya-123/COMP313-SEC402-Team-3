import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const loginData = {
      username: username,
      password: password
    };

    try {

      const response = await fetch("http://localhost:8084/api/admin/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)

      });

      const result = await response.text();

      if(result === "Login Successful"){

        navigate("/dashboard");

      } else {

        setError("Invalid username or password");

      }

    } catch(err){

      setError("Server error. Try again later.");

    }

  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h1 className="title">Toyota Dealership</h1>
        <p className="subtitle">Admin Panel Login</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button className="login-button" type="submit">Login</button>

        </form>

        {error && <p className="error">{error}</p>}

      </div>

    </div>

  );

};

export default AdminLogin;