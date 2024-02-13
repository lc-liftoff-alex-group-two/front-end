import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import HomePage from "../components/HomePage";
import FavoritesList from "../components/FavoritesList";
import Products from "../components/Products";
import OurMission from "../components/OurMission";
import ProductPage from "../components/ProductPage";
import RegistrationPage from "../components/RegistrationPage";
import LoginPage from "../components/LoginPage";
import ProductAdminPage from "../components/ProductAdminPage";
import { AuthProvider } from "../components/context/AuthContext";
import PrivateRoute from "../components/PrivateRoute";

const RoutesComponent = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesList />
              </PrivateRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/productadminpage" element={<ProductAdminPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />{" "}
          {/* New route for individual product pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default RoutesComponent;
