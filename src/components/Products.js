import ProductCard from "./ProductCard";
import "./Products.css";
import React, { useState, useEffect } from "react";
import { giveWiseApi } from "./GiveWise";
import { useAuth } from "./context/AuthContext";

const Products = ({ searchTerm }) => { // Destructure searchTerm from props
  const Auth = useAuth();
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "http://localhost:8080/products/list";
      if (!!searchTerm && String(searchTerm).trim().length !== 0) { 
        url = `http://localhost:8080/products/search/${searchTerm}`;
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
  }, [searchTerm]); // Make useEffect dependent on searchTerm

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
