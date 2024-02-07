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
      
    ];

    const brands = [
      { id: 1, name: '', image: '/images/LastTote.jpeg' },
      { id: 2, name: '', image: '/images/LogoPurpose.jpeg' },
      { id: 3, name: '', image: '/images/LogoUncommonGoods.jpeg' },
      { id: 4, name: '', image: '/images/LogoSonoma.jpeg' },
      { id: 5, name: '', image: '/images/LogoLulasGarden.jpeg' },
      { id: 6, name: '', image: '/images/LogoFeed.jpeg' },
      { id: 7, name: '', image: '/images/LogoThistleFarm.jpeg' },
      { id: 8, name: '', image: '/images/LogoConsciousStep.jpeg' },
      { id: 9, name: '', image: '/images/LogoPotteryPurpose.jpeg' },
      { id: 10, name: '', image: '/images/LogoPatagonia.jpeg' },
      // Add more brands as needed
    ];

  /*Product Carousel settings*/
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const brandCarouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  
  
    return (
      <div>
        {/* Banner Image with Text Overlay */}
        <div style={{ position: 'relative' }}>
          <img
            src="/images/donation2.jpg"
            alt="Banner Image"
            style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              color: '#fff', 
              textAlign: 'right', 
              padding: '70px',
            }}
          >
            <h1>Be the change.</h1>
            <p></p>
          </div>
        </div>

        
        {/* Product Carousel */}
        <Container>
        <h2 className="featured-products-heading">Featured Products</h2>
        <Slider {...settings} className="custom-slider">
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
              </Link>
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </Slider>
      </Container>

      {/* Second Banner Image with Text Overlay */}
      <div style={{ position: 'relative' }}>
        <img
          src="/images/BannerKidsLast.jpeg"
          alt="Another Banner Image"
          style={{ width: '100%', maxHeight: '700px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            padding: '70px',
          }}
        >
          <h1 className="second-banner-heading">What do we do?</h1>
          <p className="second-banner-p">Explore <Link to="/OurMission" style={{ color: 'white' }}>our mission</Link> page and discover how your purchases make a positive impact.</p>
        </div>
      </div>


      {/* Brands Carousel */}
    <Container>
        <h2 className="brands-heading">Our Brands</h2>
        <Slider {...brandCarouselSettings} className="custom-slider">
          {brands.map((brand) => (
            <div key={brand.id}>
              {/* You can link to a specific brand page if needed */}
              <img src={brand.image} alt={brand.name} style={{ width: '100%' }} />
              <p className="brand-name">{brand.name}</p>
            </div>
          ))}
        </Slider>
      </Container>

      {/* Third Banner Image with Text Overlay */}
      <div style={{ position: 'relative' }}>
        <img
          src="/images/BannerYellow2.jpg"
          alt="Another Banner Image"
          style={{ width: '100%', maxHeight: '550px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            padding: '70px',
          }}
        >
          <h1>Have a product with a purpose?</h1>
          <p></p>
          <p>We are always looking to feature new products on our website! If your company would like to be featured please feel free to reach out to us by filling out our <Link to="/contact" style={{ color: 'white' }}>contact us</Link> form. The more companies we partner with, the more awareness we can bring to these amazing products and initiatives!</p>
        </div>
      </div>
      
       
       {/* Fourth Banner Image with Text Overlay */}
      <div style={{ position: 'relative' }}>
        <img
          src="/images/help2.png"
          alt="Another Banner Image"
          style={{ width: '100%', maxHeight: '1100px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            padding: '70px',
          }}
        >
          <h1></h1>
          <p></p>
        </div>
      </div>
      
  

    
    </div>
  );
};

export default HomePage;