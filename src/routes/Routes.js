import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavScrollExample from '../components/NavBar';
import ContactUs from '../components/ContactUs';
import HomePage from '../components/HomePage';
import FavoritesList from '../components/FavoritesList';

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;