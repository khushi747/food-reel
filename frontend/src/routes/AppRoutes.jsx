import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../pages/auth/UserRegister";
import ChooseRegister from "../pages/auth/ChooseRegister";
import UserLogin from "../pages/auth/UserLogin";
import FoodPartnerRegister from "../pages/auth/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/auth/FoodPartnerLogin";
import Home from "../pages/general/Home";
import Saved from "../pages/general/Saved";
import BottomNav from "../components/BottomNav";
import CreateFood from "../pages/food-partner/CreateFood";
import FoodPartnerProfile from "../pages/food-partner/FoodPartnerProfile";
import UserProfile from "../pages/user/UserProfile";
import { useUser } from "../shared/UserContext";
import PrivateRoute from "./PrivateRoute";
const AppRoutes = () => {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <Home />
                <BottomNav profileId={user?._id} />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <PrivateRoute>
              <>
                <Saved />
                <BottomNav profileId={user?._id} />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-food"
          element={
            <PrivateRoute>
              <CreateFood />
            </PrivateRoute>
          }
        />
        <Route
          path="/food-partner-profile/:id"
          element={
            <PrivateRoute>
              <FoodPartnerProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-profile/:id"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
