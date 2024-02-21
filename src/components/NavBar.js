import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BagHeartFill } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import { useAuth } from "./context/AuthContext";

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const authContextValue = useAuth();
  const { getUser, userIsAuthenticated, userLogout } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const logout = () => {
    userLogout();
  };

  const getUserName = () => {
    const user = getUser();
    return user ? user.name : "";
  };

  const enterMenuStyle = () => {
    return userIsAuthenticated() ? { display: "none" } : { display: "block" };
  };

  const logoutMenuStyle = () => {
    return userIsAuthenticated() ? { display: "block" } : { display: "none" };
  };

  const adminPageStyle = () => {
    const user = getUser();
    return user && user.role === "ADMIN"
      ? { display: "block" }
      : { display: "none" };
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/products/search/${searchQuery}`);

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      // Redirect the user to the product page with filtered results
      navigate('/products', { state: { searchResults: data } });
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

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
            <Nav.Link as={Link} exact="true" to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} exact="true" to="/ourmission">
              OUR MISSION
            </Nav.Link>
            <Nav.Link as={Link} exact="true" to="/contact">
              CONTACT US
            </Nav.Link>
            <Nav.Link as={Link} exact="true" to="/products">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} style={adminPageStyle()} to="/productadminpage">
              ADMIN
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/favorites" className="favorites-icon">
              <BagHeartFill />
            </Nav.Link>
          </Nav>

          {/* Search bar */}
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="px-2 search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button type="submit" className="search-btn">
              Search
            </Button>
          </Form>

          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              style={enterMenuStyle()}
              to="/register"
              className="larger-icon"
            >
              <PersonCircle />
            </Nav.Link>
          </Nav>
          <Nav.Link className="header" style={logoutMenuStyle()}>
            {`${getUserName()}`}
          </Nav.Link>
          <Nav.Link
            as={Link}
            style={logoutMenuStyle()}
            onClick={logout}
            to="/home"
          >
            LOGOUT
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
