import ProductCard from "./ProductCard";
import "./Products.css";
import React, { useState, useEffect } from "react";
import { giveWiseApi } from "./GiveWise";
import { useAuth } from "./context/AuthContext";
import { useLocation } from "react-router-dom"; // Import useLocation

const Products = () => {
  const Auth = useAuth();
  const location = useLocation(); // Use useLocation hook to access location object
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const searchTerm = location.state && location.state.searchResults; // Access searchTerm from location state

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "http://localhost:8080/products/list";
      if (searchTerm && searchTerm.length !== 0) {
        const productName = searchTerm[0].productName; // Extract productName from the object
        url = `http://localhost:8080/products/search/${productName}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
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
  }, [searchTerm]);

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
