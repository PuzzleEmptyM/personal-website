import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="contact-info">
        <h1>Let's chat!</h1>
        <p>I am open to contract jobs or internships, so just contact me!</p>
        <a href="mailto:emptympuzzle@gmail.com">
          <FaEnvelope />
          emptympuzzle@gmail.com
        </a>
        <a href="tel:+9189382808">
          <FaPhone />
          (918)-938-2808
        </a>
        <a href="#">
          <FaMapMarkerAlt />
          Tulsa, OK
        </a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/puzzlemoser/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/puzzlemoser/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Your Message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
