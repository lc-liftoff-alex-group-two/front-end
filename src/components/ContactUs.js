import React from 'react';
import { Link } from 'react-router-dom';
import { BagHeartFill } from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <div>
      <div className="text-center">
        <h2 className="contact-us-heading">Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to reach out to us!</p>
      </div>

      <div className="container mx-auto col-md-6 mb-5">
          {/* Centered Image */}
          <div className="text-center">
            <img
              src="/images/ContactUsPage.jpg" 
              alt="Contact Us Image"
              className="img-fluid"
            />
          </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}> {/* Added marginTop style */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;