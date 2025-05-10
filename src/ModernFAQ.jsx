import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaLightbulb, FaCode, FaClock, FaMoneyBillWave, FaTools } from 'react-icons/fa';
import './modern-faq.css';

const ModernFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data with icons and categories
  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'I offer full-stack web development, UI/UX design, responsive website creation, e-commerce solutions, and technical consulting services tailored to your specific needs.',
      icon: <FaTools />,
      category: 'Services'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Node.js, JavaScript, CSS/SCSS, MongoDB, Express, and modern front-end frameworks. I stay updated with the latest industry trends to deliver cutting-edge solutions.',
      icon: <FaCode />,
      category: 'Skills'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity and requirements. A simple website might take 1-2 weeks, while complex applications can take 4-8 weeks. I will provide a detailed timeline during our initial consultation.',
      icon: <FaClock />,
      category: 'Process'
    },
    {
      question: 'How can I hire you?',
      answer: 'You can hire me by selecting a pricing plan that suits your needs or by contacting me directly through the contact form. I will respond within 24 hours to discuss your project requirements.',
      icon: <FaMoneyBillWave />,
      category: 'Hiring'
    },
    {
      question: 'Do you offer maintenance after project completion?',
      answer: 'Yes, I offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally. We can discuss maintenance options based on your specific needs.',
      icon: <FaLightbulb />,
      category: 'Support'
    }
  ];

  return (
    <section id="faq" className="section fade-in modern-faq-section" data-aos="fade-right">
      <div className="faq-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to common questions about my services and process
        </motion.p>
        <div className="faq-decoration">
          <div className="faq-circle"></div>
          <div className="faq-circle"></div>
          <div className="faq-circle"></div>
        </div>
      </div>

      <motion.div 
        className="faq-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="faq-category">
              <span>{faq.category}</span>
            </div>
            
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <div className="question-content">
                <div className="question-icon">
                  {faq.icon}
                </div>
                <h3>{faq.question}</h3>
              </div>
              <div className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
                <span></span>
                <span></span>
              </div>
            </div>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                  
                  <div className="faq-highlight">
                    <div className="highlight-icon">
                      <FaLightbulb />
                    </div>
                    <p>
                      {index === 0 && "Each service is customized to meet your specific business goals and requirements."}
                      {index === 1 && "I continuously learn new technologies to ensure your project uses the best tools available."}
                      {index === 2 && "I provide regular updates throughout the development process to keep you informed."}
                      {index === 3 && "All projects begin with a free consultation to understand your needs fully."}
                      {index === 4 && "Preventative maintenance can save you money and prevent future technical issues."}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {hoveredIndex === index && activeIndex !== index && (
              <div className="faq-hover-hint">
                Click to expand
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
      
      <div className="faq-cta">
        <motion.div
          className="faq-cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaQuestionCircle className="cta-icon" />
          <h3>Still have questions?</h3>
          <p>Feel free to reach out directly if you cannot find the answer you are looking for.</p>
          <a href="#contact" className="faq-contact-btn">Contact Me</a>
        </motion.div>
      </div>
      
      <div className="faq-decoration bottom">
        <div className="faq-shape shape1"></div>
        <div className="faq-shape shape2"></div>
        <div className="faq-shape shape3"></div>
      </div>
    </section>
  );
};

export default ModernFAQ;