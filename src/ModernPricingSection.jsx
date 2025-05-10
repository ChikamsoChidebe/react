import React, { useState } from 'react';
import { FaCheck, FaTimes, FaShieldAlt, FaCrown, FaRocket, FaLaptopCode, FaCode, FaMobile, FaDesktop, FaServer, FaDatabase, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ModernPricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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

  // Pricing plans data
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for small projects and startups',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        { text: 'Responsive Web Design', included: true },
        { text: 'Basic SEO Optimization', included: true },
        { text: '1 Week Delivery', included: true },
        { text: '3 Revisions', included: true },
        { text: 'E-commerce Functionality', included: false },
        { text: 'Custom Animations', included: false },
        { text: 'Premium Support', included: false }
      ],
      icon: <FaLaptopCode />,
      popular: false,
      buttonText: 'Get Started'
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        { text: 'Responsive Web Design', included: true },
        { text: 'Advanced SEO Optimization', included: true },
        { text: '2 Weeks Delivery', included: true },
        { text: 'Unlimited Revisions', included: true },
        { text: 'E-commerce Functionality', included: true },
        { text: 'Custom Animations', included: true },
        { text: 'Premium Support', included: false }
      ],
      icon: <FaRocket />,
      popular: true,
      buttonText: 'Choose Pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale projects and companies',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        { text: 'Responsive Web Design', included: true },
        { text: 'Advanced SEO Optimization', included: true },
        { text: 'Priority Delivery', included: true },
        { text: 'Unlimited Revisions', included: true },
        { text: 'E-commerce Functionality', included: true },
        { text: 'Custom Animations', included: true },
        { text: 'Premium Support', included: true }
      ],
      icon: <FaCrown />,
      popular: false,
      buttonText: 'Contact Me'
    }
  ];

  return (
    <section id="pricing" className="section fade-in" data-aos="fade-up">
      <div className="modern-pricing-section">
        <div className="pricing-header">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the perfect plan for your project needs. All plans include responsive design and SEO optimization.
          </motion.p>
          
          <motion.div 
            className="pricing-toggle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              className={`pricing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => toggleBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`pricing-toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => toggleBillingCycle('yearly')}
            >
              Yearly <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(Save 20%)</span>
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          className="pricing-cards-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pricingPlans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={cardVariants}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="pricing-card-header">
                <div className="pricing-icon floating">
                  {plan.icon}
                </div>
                <h3 className="pricing-plan">{plan.name}</h3>
                <p className="pricing-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  <span className="pricing-duration">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`pricing-feature ${!feature.included ? 'disabled' : ''}`}
                    >
                      <span className="pricing-feature-icon">
                        {feature.included ? <FaCheck /> : <FaTimes />}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-card-footer">
                <a 
                  href="#contact" 
                  className={`pricing-btn ${!plan.popular ? 'outline' : ''}`}
                >
                  {plan.buttonText}
                </a>
              </div>
              
              <div className="pricing-card-shape shape-1"></div>
              <div className="pricing-card-shape shape-2"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="pricing-guarantee"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="guarantee-icon">
            <FaShieldAlt />
          </div>
          <h3>100% Satisfaction Guarantee</h3>
          <p>
            I'm committed to delivering high-quality work that exceeds your expectations. 
            If you're not completely satisfied with the results, I'll work with you until you are.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernPricingSection;