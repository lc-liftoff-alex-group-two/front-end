import React from 'react';
import ProductCard from './ProductCard';  
import './ProductPage.css';


const ProductPage = () => {
  const products = [
    // product data here
  ];

  return (
    <div>
      <h2 className="ind-product-page-heading">Product Page</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
