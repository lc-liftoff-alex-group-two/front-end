import React from "react";
import { HeartFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { giveWiseApi } from "./GiveWise";

const ProductCard = ({ product, isFavorite, toggleFavorite, onDelete }) => {
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const getUserRole = () => {
    const user = getUser();
    const isAdmin = user && user.role === "ADMIN";
    return isAdmin;
  };
  const Authr = useAuth();
  const handleFavoriteClick = async() => {
    

    if(!Authr){
      navigate('/login')
      return;
    }

    const user= Authr.getUser().id;
    const authHeader = {
      Authorization: giveWiseApi.basicAuth(Authr.getUser()),
      "Content-Type": "application/json",
    };
console.log("userid"+user);
console.log("productid"+product.id);
    try{
      const response = await fetch('http://localhost:8080/favorites/add', {
        method: 'POST',
        headers: authHeader,
       body: JSON.stringify({userid: user, productid: product.id}),
      })
      if(response.ok){
        toggleFavorite(product.id);
      }else {
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
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.productName}</h3>
      </Link>
      {<p className="product-description">{product.productDescription}</p> }
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
