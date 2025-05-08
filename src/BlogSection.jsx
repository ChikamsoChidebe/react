// BlogSection.jsx - Create a separate component for better organization
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaClock, FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import blogPosts from './blogData';

const BlogSection = ({ openBlogModal }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Get all unique categories from blog posts
  const categories = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Calculate reading time based on content length
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.join(' ').split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };
  
  // Filter posts based on category and search term
  useEffect(() => {
    let result = blogPosts;
    
    if (filter !== 'All') {
      result = result.filter(post => post.tags.includes(filter));
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(result);
  }, [filter, searchTerm]);
  
  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Development': '#3498db',
      'React': '#61dafb',
      'Design': '#e74c3c',
      'UI/UX': '#9b59b6',
      'Full-Stack': '#2ecc71',
      'Career': '#f39c12',
      'AI': '#8e44ad',
      'Innovation': '#1abc9c'
    };
    
    return colors[category] || '#ff0000';
  };
  
  return (
    <section id="blog" className="section fade-in" data-aos="fade-up">
      <h2>Latest Insights</h2>
      <p className="section-subtitle">Thoughts, ideas, and insights from my journey as a developer</p>
      
      <div className="blog-controls">
        <div className="blog-search">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="blog-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={`blog-filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="no-posts-found">
          <h3>No articles found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button onClick={() => {setFilter('All'); setSearchTerm('')}}>
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {filter === 'All' && !searchTerm && (
            <div className="featured-post" onClick={() => openBlogModal(blogPosts[1])}>
              <div className="featured-post-image">
                <img src={blogPosts[1].image} alt={blogPosts[1].title} loading="lazy" />
                <div className="featured-post-overlay">
                  <span className="featured-label">Featured</span>
                </div>
              </div>
              <div className="featured-post-content">
                <div className="featured-post-meta">
                  <div className="post-date">
                    <FaCalendarAlt />
                    <span>{blogPosts[1].date}</span>
                  </div>
                  <div className="reading-time">
                    <FaClock />
                    <span>{calculateReadingTime(blogPosts[1].content)} min read</span>
                  </div>
                </div>
                <h3>{blogPosts[1].title}</h3>
                <p>{blogPosts[1].excerpt}</p>
                <div className="featured-post-tags">
                  {blogPosts[1].tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="tag"
                      style={{backgroundColor: `${getCategoryColor(tag)}20`, color: getCategoryColor(tag)}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="featured-post-footer">
                  <div className="author-info">
                    <img src={blogPosts[1].authorImage} alt={blogPosts[1].author} />
                    <div className="author-details">
                      <span className="author-name">{blogPosts[1].author}</span>
                      <span className="author-title">UI/UX Specialist</span>
                    </div>
                  </div>
                  <button className="read-more-btn">
                    Read Article <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="blog-card"
                onClick={() => openBlogModal(post)}
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="blog-card-overlay">
                    <div className="reading-time-badge">
                      <FaClock />
                      <span>{calculateReadingTime(post.content)} min read</span>
                    </div>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-date">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="tag"
                        style={{backgroundColor: `${getCategoryColor(tag)}20`, color: getCategoryColor(tag)}}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <div className="author-image">
                        <img src={post.authorImage} alt={post.author} />
                        <div className="author-hover-info">
                          <p className="author-name">{post.author}</p>
                          <p className="author-bio">Passionate web developer and designer</p>
                        </div>
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <button className="read-more">
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      
      <div className="blog-cta">
        <h3>Want to read more articles?</h3>
        <a href="#" className="cta-button">View All Posts</a>
      </div>
    </section>
  );
};

export default BlogSection;
