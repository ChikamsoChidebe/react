import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="section fade-in" data-aos="fade-left">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of these channels:</p>
      
      {/* Contact Links with Visible Icons */}
      <div className="contact-links">
        <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{fontSize: '2rem', color: 'red', marginBottom: '0.5rem'}} />
          GitHub
        </a>
        <a href="https://linkedin.com/in/Chidebe-Chikamso" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{fontSize: '2rem', color: 'red', marginBottom: '0.5rem'}} />
          LinkedIn
        </a>
        <a href="mailto:chikamsochidebe@gmail.com">
          <FaEnvelope style={{fontSize: '2rem', color: 'red', marginBottom: '0.5rem'}} />
          Email
        </a>
        <a href="https://wa.me/2349039220171" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{fontSize: '2rem', color: 'red', marginBottom: '0.5rem'}} />
          WhatsApp
        </a>
      </div>
      
      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;