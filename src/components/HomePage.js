import { Link } from 'react-router-dom';
import { BagHeartFill } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';

const HomePage = () => {
    // product data
    const products = [
      { id: 1, name: 'Williams Sonoma No Kid Hungry Tools For Change Spatula', image: '/images/Spatula.jpg' },
      { id: 2, name: 'Purpose Jewelry Daisy Earrings', image: '/images/DaisyEarrings.jpg' },
      { id: 3, name: 'Jewel Garden', image: '/images/JewelGarden.jpg' },
      { id: 4, name: 'Out of Print Read Your Socks Off Socks', image: '/images/ReadYourSocksOff.jpg' },
      // Add more products as needed
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  
    return (
      <div>
        {/* Banner Image with Text Overlay */}
        <div style={{ position: 'relative' }}>
          <img
            src="/images/donation2.jpg"
            alt="Banner Image"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              color: '#fff', // text color
              textAlign: 'right', // Align text to the right
              padding: '70px',
            }}
          >
            <h1>Be the change.</h1>
            <p></p>
          </div>
        </div>
  
        {/* Product Carousel */}
        <Container>
        <h2>Featured Products</h2>
        <Slider {...settings} className="custom-slider">
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} style={{ width: '100%' }} />
              <p>{product.name}</p>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

  
  export default HomePage;