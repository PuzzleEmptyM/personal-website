import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_e906f5g',
      'template_ajsnxh6',
      event.target,
      'PXr0XJBusd8IqBxwt'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error(error.text);
        alert('Failed to send the message. Please try again later.');
      }
    );

    // Reset the form after submission
    event.target.reset();
  };

  return (
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
            <a href="https://github.com/PuzzleEmptyM" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
