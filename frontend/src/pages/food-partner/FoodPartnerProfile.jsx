import React, { useState, useEffect } from "react";
import "../../styles/food-partner-profile.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../shared/UserContext";

const FoodPartnerProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const { user } = useUser();
  const createFood = () => {
    navigate(`/create-food`);
  };
  const logoutFoodPartner = () => {
    axios
      .get(`http://localhost:3000/api/auth/food-partner/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        navigate(`/food-partner/login`);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/food-partner/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProfile(response.data.foodPartner);
        setVideos(response.data.foodPartner.foodItems);
      });
  }, [id]);

  return (
    profile && (
      <div>
        <main className="profile-page">
          <section className="profile-header">
            <div className="profile-meta">
              <img
                className="profile-avatar"
                src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <div className="profile-info">
                <h1
                  className="profile-pill profile-business"
                  title="Business name"
                >
                  {profile?.contactName}
                </h1>
                <p className="profile-pill profile-address" title="Address">
                  {profile?.address}
                </p>
              </div>
            </div>

            <div className="profile-stats" role="list" aria-label="Stats">
              <div className="profile-stat" role="listitem">
                <span className="profile-stat-label">total meals</span>
                <span className="profile-stat-value">
                  {profile?.foodItems.length}
                </span>
              </div>
              <div className="profile-stat" role="listitem">
                <span className="profile-stat-label">customer served</span>
                <span className="profile-stat-value">
                  {profile?.customersServed}
                </span>
              </div>
            </div>
          </section>

          <hr className="profile-sep" />

          <section className="profile-grid" aria-label="Videos">
            {videos.map((v) => (
              <div key={v._id} className="profile-grid-item">
                <video
                  className="profile-grid-video"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src={v.video}
                  muted
                ></video>
              </div>
            ))}
            {profile &&
              user &&
              user.role === "foodPartner" &&
              String(user._id) === String(profile._id) && (
                <div
                  className="profile-grid-item"
                  style={{ display: "grid", placeItems: "center" }}
                >
                  <svg
                    onClick={createFood}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                  >
                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                  </svg>
                </div>
              )}
          </section>
        </main>
        {profile &&
          user &&
          user.role === "foodPartner" &&
          String(user._id) === String(profile._id) && (
            <div className="profile-logout">
              <button className="logout-button" onClick={logoutFoodPartner}>
                Logout
              </button>
            </div>
          )}
      </div>
    )
  );
};

export default FoodPartnerProfile;
