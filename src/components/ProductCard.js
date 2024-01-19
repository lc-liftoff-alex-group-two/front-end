import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleFavoriteClick = () => {
    //favorite logic here
    console.log(`Product ${product.name} added to favorites`);
  };

  const handleBuyClick = () => {
    // buy logic here
    // console.log(`Buy ${product.name}`);
    // Redirect to the product's company website
  window.location.href = product.companyWebsite;
  };

  return (
    <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-price">{product.price}</p>
    <Button
  className="custom-favorite-button"
  style={{ color: 'red' }}
  onClick={handleFavoriteClick}
>
  <HeartFill />
</Button>
    <Button
      variant="primary"
      onClick={handleBuyClick}
      className="buy-button"
    >
      Buy Here
    </Button>
  </div>
);
};

export default ProductCard;