//import React from 'react';
import './FavoritesList.css';
import {useNavigate} from 'react-router-dom'
import { useAuth } from './context/AuthContext';
import { giveWiseApi } from "./GiveWise";
import ProductCard from './ProductCard';
import Products from './Products';
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";


const FavoritesList = ({ userId }) => {
  const Auth = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // const { getUser } = useAuth();
  // const getUserRole = () => {
  //   const user = getUser();
  //   const isAdmin = user && user.role === "ADMIN";
  //   return isAdmin;
  // };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!Auth) {
          navigate('/login');
          return;
        }
        // const user = Auth.getUser();
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

 

  // const onDelete = async (id) => {
  //   const authHeader = {
  //     Authorization: giveWiseApi.basicAuth(Auth.getUser()),
  //   };
  //   try {
  //     await fetch(`http://localhost:8080/favorites/delete/${id}`, {
  //       method: "DELETE",
  //       headers: authHeader,
  //     });

  //     setFavorites((prevFavorites) =>
  //       prevFavorites.filter((Favorites) => Favorites.id !== id)
  //     );
  //   } catch (error) {
  //     console.error("Error Deleting Favorites:", error);
  //   }
  // };

  // const handleDelete = () => {
  //   onDelete(favorites.id);
  // };



  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {/* {products.map((product) => (
          <li key={product.id} product={product} />
        ))} */
        favorites.map((favorite) => (
                  <li key={favorite.id}>{favorite.product}</li>
                ))}

      {/* {getUserRole() && (
        <Button className='delete-button' onClick={handleDelete}>
          Remove
        </Button>
      )} */}
         
       
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