import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { giveWiseApi } from "./GiveWise";
const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    productDescription: "",
    image: "",
    price: "",
    companyWebsite: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({
      ...errors,
      [name]: errors,
    });

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional validation for required fields
    const requiredFields = [
      "id",
      "productName",
      "productDescription",
      "image",
      "price",
      "companyWebsite",
    ];
    const newErrors = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!product[field]) {
        newErrors[field] = "This field is required";
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    const authHeader = {
      Authorization: giveWiseApi.basicAuth(product),
      "Content-Type": "application/json",
    };

    fetch("http://localhost:8080/products/add", {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify(product),
    })
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        console.log("Product Added:", product);

        if (product) {
          onAddProduct(product);
          navigate("/products");
        } else {
          console.log("Error Adding product:", product);

          // throw new Error("Error!");
        }
      })
      .catch((error) => console.error("Error adding product:", error));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="id">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="number"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="productName"
          value={product.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="productDescription"
          value={product.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="website">
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          name="companyWebsite"
          value={product.website}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;
