import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';  // Import Link
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleFavoriteClick = () => {
    console.log(`Product ${product.name} added to favorites`);
  };

  const handleBuyClick = () => {
    window.location.href = product.companyWebsite;
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}> {/* Link to the individual product page */}
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
      </Link>
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
