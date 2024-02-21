import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [email, setEmailData] = useState({ email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...email,
      [name]: value,
    });
  };
  const handleSignUpClick = () => {
    // Check if already on register page
    if (location.pathname === "/register") {
      scrollToTop(); // Scroll to the top of the page
    } else {
      console.log("email" + email);
      // Redirect to register page and scroll to top
      fetch("http://localhost:8080/api/subscriptions/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }).then((response) => {
        if (response.status === 201) {
          alert("Subscribed successfully");
        } else if (response.status === 409) {
          alert("Email already exists");
        } else if (response.status === 900) {
          alert(`Invalid Email Address`);
        } else {
          alert(`Internal Error`);
        }
      });
      setEmailData({ email: "" });
    }
  };
  return (
    <footer className="footer">
      <div className="wave"></div>
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-column">
              <h4 className="footer-column-1">Keep Exploring</h4>
              <p className="footer-column-1-p">
                Discover more about our products and services.
              </p>

              <a href="/home" className="footer-link">
                Home
              </a>
              <a href="/ourmission" className="footer-link">
                Our Mission
              </a>
              <a href="/products" className="footer-link">
                Products
              </a>
              <a href="/favorites" className="footer-link">
                Favorites List
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-column">
              <h4 className="footer-column-2">Connect</h4>
              <p className="footer-column-2-p">
                Stay connected with us on social media.
              </p>

              <div className="social-links">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
                <p></p>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-column">
              <h4 className="footer-column-3">Stay in the know</h4>
              <p className="footer-column-3-p">
                <Link to="/register" style={{ color: "white" }}>
                  Subscribe
                </Link>{" "}
                to our newsletter for updates!
              </p>

              <div className="subscribe-section">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                  name="email"
                  value={email.email}
                  onChange={handleChange}
                />
                <button
                  className="subscribe-button"
                  onClick={handleSignUpClick}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-line"></div>
      <div className="footer-copyright">
        &copy; 2024 GiveWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
