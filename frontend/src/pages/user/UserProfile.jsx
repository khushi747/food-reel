import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const logoutUser = () => {
    axios
      .get(`http://localhost:3000/api/auth/user/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        navigate(`/food-partner/login`);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/user/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProfile(response.data.user);
      });
  }, [id]);
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>User Profile</h1>

      <p style={{ fontSize: "16px", margin: "10px 0" }}>
        <strong>Name:</strong> {profile?.fullName}
      </p>
      <p style={{ fontSize: "16px", margin: "10px 0" }}>
        <strong>Email:</strong> {profile?.email}
      </p>

      <button
        onClick={logoutUser}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
