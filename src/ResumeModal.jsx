import React from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const handleDownload = () => {
    // Direct download of the PDF
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Chikamso_Favour_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <motion.div 
      className="resume-modal-overlay" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="resume-modal-content" 
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <button className="resume-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="resume-modal-header">
          <h2>My Resume</h2>
        </div>
        
        <div className="resume-modal-body">
          <div className="resume-preview">
            <iframe 
              src="resume.pdf" 
              title="Resume Preview" 
              className="resume-iframe"
            />
          </div>
          
          <div className="resume-actions">
            <button className="download-button" onClick={handleDownload}>
              <FaDownload /> Download PDF
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;