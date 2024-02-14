import React from 'react';
import './FavoritesList.css';
import {useNavigate} from 'react-router-dom'


const FavoritesList = () => {

  const navigate = useNavigate();

  

  return (
    <div>
      <h2 className="favorites-list-heading">Your Favorites List</h2>
      {/*  favorites list content here */}
    </div>
  );
};

export default FavoritesList;