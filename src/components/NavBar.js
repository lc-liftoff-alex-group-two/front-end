import React from 'react';
import { Link } from 'react-router-dom';
import { BagHeartFill } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">GiveWise</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/ourmission">
              OUR MISSION
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              REGISTER
            </Nav.Link>
            <Nav.Link as={Link} to="/productadminpage">
              ADMIN
            </Nav.Link>



          </Nav>
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/favorites" className="favorites-icon">
            <BagHeartFill />
          </Nav.Link>
          </Nav>

          {/* Search bar */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="px-2 search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/favorites" className="larger-icon">
            <PersonCircle />
          </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
