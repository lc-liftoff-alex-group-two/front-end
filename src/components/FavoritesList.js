import './FavoritesList.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { giveWiseApi } from "./GiveWise";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const FavoritesList = ({ userId }) => {
  const Auth = useAuth();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { getUser } = useAuth();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!Auth) {
          navigate('/login');
          return;
        }
        const user = await Auth.getUser()
        const authHeader = {
          Authorization: giveWiseApi.basicAuth(user),
          "Content-Type": "application/json",
        };

        if(user){
          const response = await fetch(`http://localhost:8080/favorites/display/${user.id}`, {
            headers: authHeader,
          });

          if (response.ok) {
            const data = await response.json();
            setFavorites(data);
          } else {
            console.error('Failed to fetch favorites');
          }
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [Auth, userId, navigate]);

  const onDelete = async (productId) => {
    const authHeader = {
      Authorization: giveWiseApi.basicAuth(Auth.getUser()),
    };
  
    try {
      // Assuming you have the userId available in your component
      const userId = Auth.getUser().id;
  
      await fetch(`http://localhost:8080/favorites/delete/${userId}/${productId}`, {
        method: "DELETE",
        headers: authHeader,
      });
  
      setFavorites((prevFavorites) =>
        prevFavorites.filter(
          (favorite) =>
            favorite.userId !== userId || favorite.productId !== productId
        )
      );
    } catch (error) {
      console.error("Error Deleting Favorite:", error);
      // Handle error - show a message to the user, or log it for further investigation
    }
  };
  

  const handleBuyNow = (companyWebsite) => {
    window.location.href = companyWebsite;
  };

  return (
    <div className="favorites-container">
      <h2 className='favorites-list-heading'>Favorites</h2>
      <div className="product-container">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorites-card">
            <img src={favorite.image} alt={favorite.name} className="product-image" />
            <h3 className="product-name">{favorite.productName}</h3>
            <p className="product-description">{favorite.productDescription}</p>
            <p className="favorites-product-price">${favorite.price}</p>
            <Button className="delete-button" onClick={() => onDelete(favorite.id)}>
              Remove
            </Button>
            <Button className="buy-button" onClick={() => handleBuyNow(favorite.companyWebsite)}>
              Buy Here
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
