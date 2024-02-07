import React from 'react';
import { Link } from 'react-router-dom';
import { BagHeartFill } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ProductForm from './ProductForm';


const ProductAdminPage = () => {
    const [products, setProducts] = useState([]);
  
    const handleAddProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Add Product</Card.Title>
                <ProductForm onAddProduct= {handleAddProduct} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default ProductAdminPage;