import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavScrollExample from '../components/NavBar';
import ContactUs from '../components/ContactUs';
import HomePage from '../components/HomePage';
import FavoritesList from '../components/FavoritesList';
import Products from '../components/Products';
import OurMission from '../components/OurMission';
import ProductPage from '../components/ProductPage';

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/products/:productId" element={<ProductPage />} /> {/* New route for individual product pages */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;