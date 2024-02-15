import React from "react";
import { Link } from "react-router-dom";
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
  const authContextValue = useAuth();
  console.log("error:" + authContextValue);
  const { getUser, userIsAuthenticated, userLogout } = useAuth();

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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="px-2 search"
              aria-label="Search"
            />
            <Button className="search-btn">Search</Button>
          </Form>
        </Navbar.Collapse>
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
        <Nav.Link header style={logoutMenuStyle()}>
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
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
