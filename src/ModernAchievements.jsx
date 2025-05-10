import React, { useState, useEffect, useRef } from 'react';
import { FaTrophy, FaClipboardCheck, FaClock, FaChartLine, FaStar, FaAward, FaMedal } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ModernAchievements = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      startCounting();
    }
  }, [controls, inView]);

  const startCounting = () => {
    // Projects counter
    const projectInterval = setInterval(() => {
      setProjectCount(prev => {
        if (prev < 50) return prev + 1;
        clearInterval(projectInterval);
        return prev;
      });
    }, 40);

    // Orders counter
    const orderInterval = setInterval(() => {
      setOrderCount(prev => {
        if (prev < 120) return prev + 1;
        clearInterval(orderInterval);
        return prev;
      });
    }, 20);

    // Years counter
    const yearInterval = setInterval(() => {
      setYearCount(prev => {
        if (prev < 3) return prev + 1;
        clearInterval(yearInterval);
        return prev;
      });
    }, 500);

    return () => {
      clearInterval(projectInterval);
      clearInterval(orderInterval);
      clearInterval(yearInterval);
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Achievement data
  const achievements = [
    {
      id: 'projects',
      icon: <FaChartLine />,
      count: projectCount,
      title: 'Projects Completed',
      maxValue: 50,
      details: 'Successfully delivered diverse web projects across various industries.',
      color: '#ff3e55',
      badge: <FaTrophy className="achievement-badge" />,
      badgeText: 'Top Dev'
    },
    {
      id: 'orders',
      icon: <FaClipboardCheck />,
      count: orderCount,
      title: 'Orders Delivered',
      maxValue: 120,
      details: 'Satisfied clients with on-time delivery and exceptional quality.',
      color: '#cc0000',
      badge: <FaStar className="achievement-badge" />,
      badgeText: '5-Star'
    },
    {
      id: 'years',
      icon: <FaClock />,
      count: yearCount,
      title: 'Years Experience',
      maxValue: 3,
      details: 'Professional experience in web development and design.',
      color: '#ff3e55',
      badge: <FaMedal className="achievement-badge" />,
      badgeText: 'Pro'
    }
  ];

  return (
    <section id="stats" className="section fade-in achievements-section" data-aos="fade-left">
      <div className="achievements-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A track record of success and growth in web development
        </motion.p>
        <motion.div 
          className="achievement-sparkles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="sparkle sparkle-1"></span>
          <span className="sparkle sparkle-2"></span>
          <span className="sparkle sparkle-3"></span>
        </motion.div>
      </div>

      <motion.div
        className="achievements-grid"
        variants={containerVariants}
        initial="hidden"
        ref={ref}
        animate={controls}
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="achievement-card"
            variants={itemVariants}
          >
            <div className="achievement-badge-container">
              <div className="badge-shine"></div>
              {achievement.badge}
              <span className="badge-text">{achievement.badgeText}</span>
            </div>
            
            <div className="achievement-icon floating">
              {achievement.icon}
            </div>
            
            <div className="circular-progress">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id={`gradient-${achievement.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff3e55" />
                    <stop offset="100%" stopColor="#cc0000" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  className="circular-progress-background"
                  cx="60"
                  cy="60"
                  r="45"
                />
                <circle
                  className="circular-progress-value"
                  cx="60"
                  cy="60"
                  r="45"
                  strokeDashoffset={283 - (283 * achievement.count / achievement.maxValue)}
                  stroke={`url(#gradient-${achievement.id})`}
                  filter="url(#glow)"
                />
                <motion.circle
                  className="circular-progress-glow"
                  cx="60"
                  cy="60"
                  r="45"
                  strokeDashoffset={283 - (283 * achievement.count / achievement.maxValue)}
                  stroke={`url(#gradient-${achievement.id})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
              <div className="circular-progress-text">
                {achievement.count}<span>+</span>
              </div>
              <div className="progress-sparkles">
                <span className="progress-sparkle"></span>
                <span className="progress-sparkle"></span>
              </div>
            </div>
            
            <h3 className="achievement-title">{achievement.title}</h3>
            
            <div className="achievement-details">
              {achievement.details}
            </div>
            
            <div className="linear-progress-container">
              <div className="linear-progress-label">
                <span>Progress</span>
                <span>{Math.round((achievement.count / achievement.maxValue) * 100)}%</span>
              </div>
              <div className="linear-progress-bar">
                <motion.div 
                  className="linear-progress-value"
                  initial={{ width: 0 }}
                  animate={{ width: `${(achievement.count / achievement.maxValue) * 100}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="progress-shine"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff3e55" />
            <stop offset="100%" stopColor="#cc0000" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default ModernAchievements;