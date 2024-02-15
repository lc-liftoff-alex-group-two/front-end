import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, toggleFavorite, onDelete }) => {
  const handleFavoriteClick = () => {
    toggleFavorite(product.id);
  };

  const handleBuyClick = () => {
    window.location.href = product.companyWebsite;
  };

  const handleDelete = () => {
    onDelete(product.id);
  }

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.productName}</h3>
      </Link>
      <p className="product-description">{product.productDescription}</p>
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
      <Button className='delete-button'
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
};

export default ProductCard;

