//import React from 'react';
import './FavoritesList.css';
import {useNavigate} from 'react-router-dom'
import { useAuth } from './context/AuthContext';
import { giveWiseApi } from "./GiveWise";
import ProductCard from './ProductCard';
import Products from './Products';
import React, { useState, useEffect } from "react";



const FavoritesList = ({userId}) => {
  const Auth = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(({userId}) => {
    const fetchFavorites = async () => {
      try {
        if(!Auth){
          navigate('/login')
          return;
        }
        const authHeader = {
          Authorization: giveWiseApi.basicAuth(Auth.getUser()),
          "Content-Type": "application/json",
        };
        const response = await fetch(`http://localhost:8080/favorites/${userId}`, {
          headers: authHeader,
        });

        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          console.error('Failed to fetch favorites');
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [Auth, userId, navigate]); 


  return (
    <div>
      <h2>Favorites</h2>
      <ul>
      {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            
          />
        ))}
      </ul>
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