import React, { useState } from 'react';
import './ContactPage.css'; 
import Resume from './images/Balaprasanna-Resume-Mern-stack-Developer.pdf';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <h2>Connect with Me</h2>
        <a href="www.linkedin.com/in/bala-prasanna-mernstack-developer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Prasanna97949" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

      <div className="resume-section">
        <h2>Download My Resume</h2>
        <a href={Resume} download>Download Resume</a> 
      </div>
    </div>
  );
};

export default ContactPage;