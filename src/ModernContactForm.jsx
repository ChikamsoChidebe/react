import React, { useState } from "react";
import "./modern-contact.css"; // Import your CSS file here
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone, FaFacebook, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';

function ModernContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Your message has been sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }, 1500);
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <section id="contact" className="section fade-in" data-aos="fade-left">
      <div className="modern-contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 style={{color:"white"}}>Get In Touch</h2>
            <p>I'd love to hear from you! Whether you have a question, project idea, or just want to say hello, feel free to reach out.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                   <a href="mailto:chikamsochidebe@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <FaEnvelope /> 
                    </a>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>chikamsochidebe@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <a href="tel:+2349039220171" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <FaPhone />
                  </a>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+234 903 922 0171</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/Chidebe-Chikamso" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/2349039220171" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
              </a>
              <a href="https://m.me/chidebe-chikamso" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            {successMessage ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>{successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className={`form-group ${activeField === 'name' ? 'active' : ''} ${errors.name ? 'error' : ''}`}>
                  <div className="input-icon">
                    <FaUser />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                </div>
                
                <div className={`form-group ${activeField === 'email' ? 'active' : ''} ${errors.email ? 'error' : ''}`}>
                  <div className="input-icon">
                    <FaEnvelope />
                  </div>
                  <div className="input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
                
                <div className={`form-group ${activeField === 'subject' ? 'active' : ''} ${errors.subject ? 'error' : ''}`}>
                  <div className="input-icon">
                    <FaComment />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>
                
                <div className={`form-group ${activeField === 'message' ? 'active' : ''} ${errors.message ? 'error' : ''}`}>
                  <div className="input-icon textarea-icon">
                    <FaComment />
                  </div>
                  <div className="input-container">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      placeholder="Your Message"
                      rows="5"
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                </div>
                
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernContactForm;