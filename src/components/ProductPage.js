import React from 'react';
import ProductCard from './ProductCard';  


const ProductPage = () => {
  const products = [
    // product data here
  ];

  return (
    <div>
      <h2>Product Page</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
