import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="wave"></div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer-column">
                <h4>Keep Exploring</h4>
                <p>Discover more about our products and services.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-column">
                <h4>Connect</h4>
                <p>Stay connected with us on social media.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-column">
                <h4>Stay in the know</h4>
                <p>Subscribe to our newsletter for updates.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;