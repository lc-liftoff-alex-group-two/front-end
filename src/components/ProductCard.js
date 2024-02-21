import React from "react";
import { HeartFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import "./ProductCard.css";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { giveWiseApi } from "./GiveWise";

const ProductCard = ({ product, toggleFavorite, onDelete }) => {
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const getUserRole = () => {
    const user = getUser();
    const isAdmin = user && user.role === "ADMIN";
    return isAdmin;
  };
  const Authr = useAuth();
  // const handleFavoriteClick = async () => {
  //   if (!Authr.userIsAuthenticated()) {
  //     navigate("/login");
  //     return;
  //   }

  //   const userId = getUser().id;
  //      const authHeader = {
  //     Authorization: giveWiseApi.basicAuth(Authr.getUser()),
  //     "Content-Type": "application/json",
  //   };

  //    // Check if the product is already in the user's favorites
  //    if (product.isFavorite) {
  //     // Optionally, you can display a message to the user that the product is already in favorites
  //     console.log('Product is already in favorites');
  //     return;
  //   }


  //   try {
  //     const response = await fetch("http://localhost:8080/favorites/add", {
  //       method: "POST",
  //       headers: authHeader,
  //       body: JSON.stringify({ userid: userId, productid: product.id }),
  //     });
  //     if (response.ok) {
  //       toggleFavorite(product.id);
  //     } else {
  //       console.error("Failed to add product to favorites");
  //     }
  //   } catch (error) {
  //     console.error("Error adding product to favorites:", error);
  //   }
  // };

  const handleFavoriteClick = async () => {
    if (!Authr.userIsAuthenticated()) {
      navigate('/login');
      return;
    }
  
    const userId = getUser().id;
    const authHeader = {
      Authorization: giveWiseApi.basicAuth(Authr.getUser()),
      "Content-Type": "application/json",
    };
  
    try {
      // Check if the product is already in the user's favorites
      const response = await fetch(`http://localhost:8080/favorites/check/${userId}/${product.id}`, {
        headers: authHeader,  // Include authentication headers
      });
  
      if (!response.ok) {
        console.error('Failed to check product in favorites');
        return;
      }
  
      const result = await response.json();
  
      if (result.exists) {
        console.log('Product is already in favorites');
        return;
      }
  
      // If the product is not in favorites, add it
      const addResponse = await fetch('http://localhost:8080/favorites/add', {
        method: 'POST',
        headers: authHeader,
        body: JSON.stringify({ userid: userId, productid: product.id }),
      });
  
      if (addResponse.ok) {
        toggleFavorite(product.id);
      } else {
        console.error('Failed to add product to favorites');
      }
    } catch (error) {
      console.error('Error adding product to favorites:', error);
    }
  };
  
  

  const handleBuyClick = () => {
    window.location.href = product.companyWebsite;
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.productName}</h3>
      {<p className="product-description">{product.productDescription}</p>}
      <p className="product-price">${product.price}</p>
      <Button
        className={`custom-favorite-button ${product.isFavorite ? 'favorite' : ''}`}
        onClick={handleFavoriteClick}
      >
        <HeartFill className="no-focus-outline" />
      </Button>
      <Button
        onClick={handleBuyClick}
        className="buy-button"
      >
        Buy Here
      </Button>
      {getUserRole() && (
        <Button className='delete-button' onClick={handleDelete}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
