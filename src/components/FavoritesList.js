//import React from 'react';
import './FavoritesList.css';
import {useNavigate} from 'react-router-dom'
import { useAuth } from './context/AuthContext';
import { giveWiseApi } from "./GiveWise";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";



const FavoritesList = ({ userId }) => {
  const Auth = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const getUserRole = () => {
    const user = getUser();
    const isAdmin = user && user.role === "ADMIN";
    return isAdmin;
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!Auth) {
          navigate('/login');
          return;
        }
        //const user = Auth.getUser();
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
          console.log(data)
          // Assuming you have a 'products' field in your 'data' object, update as needed
          setProducts(data.products);
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
      await fetch(`http://localhost:8080/favorites/delete/${productId}`, {
        method: "DELETE",
        headers: authHeader,
      });
  
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.userId !== userId || favorite.productId !== productId)
      );
    } catch (error) {
      console.error("Error Deleting Favorite:", error);
    }
  };

  

  const handleBuyNow = (companyWebsite) => {
    
    window.location.href = companyWebsite;
    
  };

  



  return (
    <div >
      <h2>Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id} className='favorites-card' >
          <img src={favorite.image} alt={favorite.name} className="product-image" />
          <h3 className="product-name">{favorite.productName}</h3>
          <p className="product-description">{favorite.productDescription}</p>
          <p className="product-price">${favorite.price}</p>

          {getUserRole() && (
            <Button className='delete-button' onClick={() => onDelete(favorite.id)}>
              Remove
            </Button>
          )}
          <Button className='buy-button' onClick={() => handleBuyNow(favorite.companyWebsite)}>
                Buy Here
              </Button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;

  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       // Make a request to the backend to fetch cart items with product details for the user ID
  //       const response = await fetch(`http://localhost:8080/favorites/{userId}`);
  //       const data = await response.json();
  //       setFavorites(data);
  //     } catch (error) {
  //       console.error('Error fetching favorites items:', error);
  //     }
  //   };

  //   fetchFavorites();
  // }, [userId]);

  // return (
  //   <div>
  //     <h1>Favorites</h1>
  //     <ul>
  //       {favorites.map((favorite) => (
  //         <li key={favorite.id}>{/* Render favorite details */}</li>
  //       ))}
  //     </ul>
     
  //   </div>
  // );