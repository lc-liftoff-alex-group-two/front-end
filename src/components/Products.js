import ProductCard from "./ProductCard";
import "./Products.css";
import React, { useState, useEffect } from "react";
import { giveWiseApi } from "./GiveWise";
import { useAuth } from "./context/AuthContext";
//import axios from 'axios';

const Products = () => {
  const Auth = useAuth();
  // const handleLogError = (error) => {
  //   if (error.response) {
  //     console.log(error.response.data)
  //   } else if (error.request) {
  //     console.log(error.request)
  //   } else {
  //     console.log(error.message)
  //   }
  // }
  // const [isProductsLoading, setIsProductsLoading] = useState(false)
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products/list");
        const data = await response.json();
        // Initialize the favorite status for each product to false
        const productsWithFavorites = data.map((product) => ({
          ...product,
          isFavorite: false,
        }));
        setProducts(productsWithFavorites);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const authHeader = {
      Authorization: giveWiseApi.basicAuth(Auth.getUser()),
    };
    try {
      await fetch(`http://localhost:8080/products/delete/${id}`, {
        method: "DELETE",
        headers: authHeader,
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
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };
  const handleSort = () => {
    const sortedProducts = [...products];

    if (sortOrder === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };
  return (
    <div>
      <h2 className="products-heading-text">Products</h2>
      <div className="sort-container">
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <button id="sortButton" onClick={handleSort}>
          Sort
        </button>
      </div>
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
