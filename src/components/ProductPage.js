
import ProductCard from './ProductCard';  
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
//import Products from './Products';


const ProductPage = () => {
  const [products, setProducts] = useState();
  const { id } = useParams();

  useEffect(() =>{
    const fetchProduct = async () => {
      try{
        const response = await fetch (`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setProducts(data);
      } catch(error){
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!products) {
    return <div>Loading...</div>;
  }

 
  return (
    <div>
      <h2>Product Page</h2>
      <div className="product-container">
      {/* <ProductCard key={product.id} product={product} /> */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
 );
};

export default ProductPage;
