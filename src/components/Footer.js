import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSignUpClick = () => {
    // Check if already on register page
    if (location.pathname === '/register') {
      scrollToTop(); // Scroll to the top of the page
    } else {
      // Redirect to register page and scroll to top
      navigate('/register');
      scrollToTop();
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
              <p className="footer-column-1-p">Discover more about our products and services.</p>
           
              <a href="/home" className="footer-link">Home</a>
              <a href="/ourmission" className="footer-link">Our Mission</a>
              <a href="/products" className="footer-link">Products</a>
              <a href="/favorites" className="footer-link">Favorites List</a>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-column">
              <h4 className="footer-column-2">Connect</h4>
              <p className="footer-column-2-p">Stay connected with us on social media.</p>
              
              <div className="social-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
                <p></p>
                <a href="/contact" className="footer-link">Contact Us</a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-column">
              <h4 className="footer-column-3">Stay in the know</h4>
              <p className="footer-column-3-p">
                <Link to="/register" style={{ color: 'white' }}>Subscribe</Link> to our newsletter for updates!
              </p>
           
              <div className="subscribe-section">
                <input type="email" placeholder="Enter your email" className="email-input" />
                <button className="subscribe-button" onClick={handleSignUpClick}>Sign Up</button>
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
