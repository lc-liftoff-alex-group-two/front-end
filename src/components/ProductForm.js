import React from 'react';
import { Link } from 'react-router-dom';
import { BagHeartFill } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
    const [product, setProduct] = useState({
      id: '',
      name: '',
      description: '',
      image: '',
      price: '',
      website: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddProduct(product);
      // Clear form fields after submission
      setProduct({
        id: '',
        name: '',
        description: '',
        image: '',
        price: '',
        website: '',
      });
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="id">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" name="id" value={product.id} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={product.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={product.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image" value={product.image} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" name="price" value={product.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="website">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" name="website" value={product.website} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    );
  };
  
  export default ProductForm;