import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaArrowRight, FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './modern-testimonials.css';

const ModernTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const progressRef = useRef(null);
  const swiperRef = useRef(null);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "Tech Startup Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Chidebe is an exceptional developer! Delivered beyond expectations and brought innovative solutions to our project challenges.",
      rating: 5,
      project: "E-commerce Platform",
      company: "TechVision Inc."
    },
    {
      id: 2,
      name: "McDonald Swift",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "Chikamso gives amazing work! Highly recommended for anyone looking for a developer who truly understands business needs.",
      rating: 5,
      project: "Company Website",
      company: "Swift Marketing"
    },
    {
      id: 3,
      name: "Kolade Abiodun",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      text: "Professional and timely delivery. The attention to detail and clean code made our collaboration smooth and productive.",
      rating: 5,
      project: "Mobile App",
      company: "KA Solutions"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Amazing attention to detail! Chikamso understood our design requirements perfectly and implemented them flawlessly.",
      rating: 5,
      project: "Portfolio Website",
      company: "Design Forward"
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "Delivered the project on time! The code quality was excellent and the documentation made future updates easy.",
      rating: 5,
      project: "SaaS Application",
      company: "BrownTech"
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Digital Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      text: "Highly skilled and professional! Chidebe's technical expertise helped us implement complex features we didn't think were possible.",
      rating: 5,
      project: "Marketing Dashboard",
      company: "Davis Digital"
    },
    {
      id: 7,
      name: "David Wilson",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Great experience! Responsive, professional, and delivered exactly what we needed for our business website.",
      rating: 5,
      project: "Business Website",
      company: "Wilson Enterprises"
    }
  ];

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'star active' : 'star'} />
    ));
  };

  // Handle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  // Update progress bar
  useEffect(() => {
    if (progressRef.current) {
      const width = ((activeIndex + 1) / testimonials.length) * 100;
      progressRef.current.style.width = `${width}%`;
    }
  }, [activeIndex, testimonials.length]);

  return (
    <section id="testimonials" className="section modern-testimonials-section" data-aos="fade-up">
      <div className="testimonial-particles"></div>
      
      <div className="testimonials-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header-content"
        >
          <span className="pre-title">Trusted by Clients</span>
          <h2>What People Say</h2>
          <div className="header-decoration">
            <span className="line"></span>
            <FaShieldAlt className="icon-shield" />
            <span className="line"></span>
          </div>
        </motion.div>
      </div>

      <div className="testimonial-slider-container">
        <div className="testimonial-backdrop"></div>
        
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"><span class="bullet-label">${testimonials[index].name}</span></span>`;
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="testimonial-swiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="quote-icon top">
                      <FaQuoteLeft />
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                        />
                        <div className="image-ring"></div>
                      </div>
                      <div className="author-info">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="quote-icon bottom">
                      <FaQuoteRight />
                    </div>
                    <div className="card-flip-hint">
                      <span>Click to see project details</span>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="back-content">
                      <h3>Project Details</h3>
                      <div className="project-info">
                        <div className="info-item">
                          <span className="label">Project:</span>
                          <span className="value">{testimonial.project}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Company:</span>
                          <span className="value">{testimonial.company}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Client:</span>
                          <span className="value">{testimonial.name}</span>
                        </div>
                      </div>
                      <div className="back-quote">
                        <p>"{testimonial.text.substring(0, 60)}..."</p>
                      </div>
                    </div>
                    <div className="card-flip-hint">
                      <FaArrowLeft />
                      <span>Back to testimonial</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="swiper-controls">
          <div className="swiper-button-prev">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          
          <div className="swiper-pagination"></div>
          
          <div className="swiper-button-next">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
        
        <div className="testimonial-progress">
          <div className="progress-container">
            <div className="progress-bar" ref={progressRef}></div>
          </div>
          <button 
            className={`play-pause-btn ${isPlaying ? 'playing' : 'paused'}`}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause testimonial slider" : "Play testimonial slider"}
          >
            <span className="play-icon"></span>
            <span className="pause-icon"></span>
          </button>
        </div>
      </div>
      
      <div className="testimonial-stats">
        <motion.div 
          className="stat-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction</span>
        </motion.div>
        <motion.div 
          className="stat-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects Completed</span>
        </motion.div>
        <motion.div 
          className="stat-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="stat-number">5.0</span>
          <span className="stat-label">Average Rating</span>
        </motion.div>
      </div>
      
      <motion.div 
        className="testimonial-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3>Ready to start your project?</h3>
        <p>Let's create something amazing together</p>
        <a href="#contact" className="cta-button">
          <span>Get in Touch</span>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default ModernTestimonials;