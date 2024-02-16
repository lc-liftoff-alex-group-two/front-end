import React, { useState } from 'react';
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch('http://localhost:8080/api/contact/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          console.log('Form data submitted:', formData);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          alert('Your message has been submitted successfully!');
        } else {
          throw new Error('Failed to submit the form.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit the form. Please try again later.');
      }
    };
  
    return (
      <div>
        <div className="text-center">
          <h2 className="contact-us-heading">Contact Us</h2>
          <p>If you have any questions or inquiries, please feel free to reach out to us!</p>
        </div>
  
        <div className="container mx-auto col-md-6 mb-5">
          <div className="text-center">
            <img
              src="/images/ContactUsPage.jpg" 
              alt="Contact Us Image"
              className="img-fluid"
            />
          </div>
  
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
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
              <button type="submit" className="contact-submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ContactUs;
