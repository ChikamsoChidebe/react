import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaTimes } from 'react-icons/fa';
import './AnimatedResume.css';

const AnimatedResume = ({ isOpen, onClose }) => {
  const resumeRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const downloadPDF = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="animated-resume-overlay">
      <motion.div 
        className="animated-resume-container"
        ref={resumeRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <button className="close-resume-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="download-pdf-btn" onClick={downloadPDF}>
          <FaDownload /> Download PDF
        </div>
        
        <div className="resume-header">
          <motion.div 
            className="profile-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <img src="/me4.JPG" alt="Chikamso Favour" />
          </motion.div>
          
          <motion.div 
            className="header-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Chikamso Favour
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Digital Craftsman & Experience Architect
            </motion.h2>
            
            <motion.div 
              className="contact-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <a href="mailto:contact@chikamsofavour.com"><FaEnvelope /> contact@chikamsofavour.com</a>
              <a href="tel:+2349039220171"><FaPhone /> +234 903 922 0171</a>
              <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer">
                <FaGithub /> ChikamsoChidebe
              </a>
              <a href="https://linkedin.com/in/Chidebe-Chikamso" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> Chidebe-Chikamso
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="resume-body">
          <div className="resume-section">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="section-title"
            >
              Visionary Statement
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Transforming complex digital challenges into elegant, user-centric solutions that not only meet
              business objectives but create memorable experiences that resonate with users. My mission is to
              bridge the gap between technology and human emotion through thoughtful design and flawless execution.
            </motion.p>
          </div>
          
          <div className="resume-section">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="section-title"
            >
              Technical Mastery
            </motion.h3>
            
            <motion.div 
              className="skills-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  {['React.js', 'Vue.js', 'TypeScript', 'Redux', 'Next.js', 'SASS/SCSS', 'Tailwind CSS'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="skill-tag"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 + (index * 0.1) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  {['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'GraphQL', 'RESTful APIs'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="skill-tag"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 + (index * 0.1) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <h4>UI/UX Design</h4>
                <div className="skill-tags">
                  {['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Wireframing', 'Prototyping'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="skill-tag"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.7 + (index * 0.1) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="resume-section">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2 }}
              className="section-title"
            >
              Professional Journey
            </motion.h3>
            
            <div className="timeline">
              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.3 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Independent Digital Consultant & Full Stack Developer</h4>
                  <p className="timeline-period">Remote | 2021 - Present</p>
                  <ul>
                    <motion.li 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.4 }}
                    >
                      Orchestrated 120+ successful client projects with a remarkable 98% satisfaction rate
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 }}
                    >
                      Revolutionized e-commerce experiences resulting in 40% conversion rate improvements
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.6 }}
                    >
                      Engineered intuitive user interfaces that decreased bounce rates by 35%
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.7 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Web Development Specialist - TechSolutions Inc.</h4>
                  <p className="timeline-period">Lagos, Nigeria | 2020 - 2021</p>
                  <ul>
                    <motion.li 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.8 }}
                    >
                      Spearheaded development of enterprise-level applications using React.js, Node.js, and MongoDB
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.9 }}
                    >
                      Collaborated with cross-functional teams to implement UI/UX improvements
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.0 }}
                    >
                      Optimized application performance, reducing load times by 40%
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="resume-section">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.1 }}
              className="section-title"
            >
              Signature Projects
            </motion.h3>
            
            <div className="projects-grid">
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.2 }}
              >
                <h4>E-commerce Revolution Platform</h4>
                <p>Architected a cutting-edge e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and seamless payment processing.</p>
                <div className="project-tech">React.js • Node.js • MongoDB • Stripe API</div>
              </motion.div>
              
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.3 }}
              >
                <h4>Immersive Portfolio Experience</h4>
                <p>Crafted an award-winning portfolio website featuring WebGL animations, interactive 3D elements, and accessibility-focused design.</p>
                <div className="project-tech">Three.js • GSAP • React.js • Framer Motion</div>
              </motion.div>
              
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.4 }}
              >
                <h4>Content Management Ecosystem</h4>
                <p>Developed a comprehensive content platform with advanced user authentication, real-time collaboration tools, and analytics dashboard.</p>
                <div className="project-tech">Next.js • Firebase • Redux • GraphQL</div>
              </motion.div>
            </div>
          </div>
          
          <div className="resume-section">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.5 }}
              className="section-title"
            >
              Educational Foundation
            </motion.h3>
            
            <motion.div 
              className="education-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6 }}
            >
              <h4>Bachelor of Science in Computer Science</h4>
              <p>University of Technology | 2020</p>
              <ul>
                <li>Specialized Focus: Advanced Web Technologies, Human-Computer Interaction</li>
                <li>Capstone Achievement: Developed an award-winning e-learning platform</li>
                <li>Academic Distinction: Graduated with First Class Honors</li>
              </ul>
            </motion.div>
          </div>
          
          <div className="resume-section certifications">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.7 }}
              className="section-title"
            >
              Professional Certifications
            </motion.h3>
            
            <motion.div 
              className="cert-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.8 }}
            >
              {[
                'AWS Certified Solutions Architect - Amazon Web Services (2023)',
                'Professional UI/UX Design Certification - Google (2022)',
                'Advanced React Patterns & Performance - Frontend Masters (2023)',
                'MongoDB Database Administration & Security - MongoDB University (2022)',
                'Certified Scrum Master - Scrum Alliance (2021)'
              ].map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.9 + (index * 0.1) }}
                >
                  {cert}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedResume;