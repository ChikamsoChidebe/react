// BlogModal.jsx
import React from 'react';
import { FaTimes, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import './BlogModal.css';

const BlogModal = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null;
  
  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="blog-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="blog-modal-header">
          <img src={post.image} alt={post.title} className="blog-modal-image" />
          <h2>{post.title}</h2>
        </div>
        
        <div className="blog-modal-meta">
          <div className="blog-modal-meta-item">
            <FaCalendarAlt />
            <span>{post.date}</span>
          </div>
          <div className="blog-modal-meta-item">
            <FaUser />
            <span>{post.author}</span>
          </div>
          <div className="blog-modal-meta-item">
            <FaTag />
            <span>{post.tags.join(', ')}</span>
          </div>
        </div>
        
        <div className="blog-modal-body">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
