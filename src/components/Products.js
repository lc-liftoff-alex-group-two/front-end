import ProductCard from "./ProductCard";
import "./Products.css";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/list");
        const data = await response.json();
        // Initialize the favorite status for each product to false
        const productsWithFavorites = data.map(product => ({ ...product, isFavorite: false }));
        setProducts(productsWithFavorites);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE",
      });

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error Deleting Product:", error);
    }
  };

  const toggleFavorite = (productId) => {
    // Update the state to toggle the favorite status for the product with productId
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );
  };

  return (
    <div>
      <h2 className="products-heading-text">Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

