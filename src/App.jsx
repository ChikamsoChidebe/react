import './App.css';
import './responsive-fixes.css'; // Import responsive fixes
import './ModernContactForm'; // Import modern contact form styles
import ModernPricingSection from './ModernPricingSection';
import ModernAchievements from './ModernAchievements';
import './modern-achievements.css';
import './ModernFAQ';
import './modern-faq.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './modern-contact.css';
import ContactForm from "./ContactForm";
import SearchBar from './SearchBar';
import BlogModal from './BlogModal';
import blogPosts from './blogData';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaHome, FaQuestionCircle, FaMoon, FaEnvelope, FaPhone, FaStar, FaChevronDown, FaBars, FaTimes, Fa500Px, FaFacebook, FaFacebookF, FaWhatsapp, FaChevronUp, FaArrowRight, FaBriefcase, FaChartBar, FaDollarSign, FaNewspaper, FaDownload, FaShieldAlt } from 'react-icons/fa';
import { useState, useEffect,  lazy, Suspense, } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { ParallaxProvider } from "react-scroll-parallax";
import SkillRadarChart from "./SkillRadarChart";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Import coverflow effect
import { AnimatePresence, motion } from "framer-motion";
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
<a href="#main-content" className="skip-link">Skip to Content</a>
import AIChat from "./AIChat";
import AnimatedResume from './AnimatedResume';
import ResumeModal from './ResumeModal'; 
import ModernContactForm from './ModernContactForm';
import ModernFAQ from './ModernFAQ';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [projectCount, setProjectCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [yearCount, setyearCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const portfolioProjects = [
    { id: 1, title: "E-commerce Platform", description: "An e-commerce platform with a modern design.", category: "Web Development" },
    { id: 2, title: "Portfolio Website", description: "A sleek portfolio website showcasing my skills.", category: "UI/UX Design" },
    { id: 3, title: "Blog Platform", description: "A blog platform with user authentication.", category: "Web Development" },
    { id: 4, title: "Mobile App Design", description: "A mobile app design for a fitness tracker.", category: "UI/UX Design" },
    { id: 5, title: "Dashboard", description: "A dynamic dashboard for analytics.", category: "Web Development" },
    { id: 6, title: "Social Media App", description: "A social media app with real-time chat functionality.", category: "Web Development" },
  ];
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter((project) => project.category === category));
    }
  };
  useEffect(() => {
    setFilteredProjects(portfolioProjects); // Show all projects by default
  }, []);
  let [text] = useTypewriter({
    words: ['Chikamso Favour', 'A Web Developer', 'A UI/UX Designer', 'A Tech Enthusiast', 'A Freelancer'],
    loop: 0,
    typeSpeed: 50, // Faster typing speed
    deleteSpeed: 50, // Faster deleting speed
    delaySpeed: 300, // Shorter delay before typing the next word
  });

  const openBlogModal = (post) => {
    setSelectedBlogPost(post);
    setBlogModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeBlogModal = () => {
    setBlogModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You would also add logic here to apply dark mode styles
  };

  const downloadResume = () => {
  setResumeModalOpen(true);
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};
  // useEffect(() => {
  //   const cursor = document.querySelector(".custom-cursor");

  //   const handleMouseMove = (e) => {
  //     cursor.style.left = `${e.pageX}px`;
  //     cursor.style.top = `${e.pageY}px`;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      if (window.scrollY > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when in viewport
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  const toggleAbout = () => {
    setShowMoreAbout(!showMoreAbout);
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  // Simulate counting for projects and orders
  useEffect(() => {
    let projectCounter = 0;
    let orderCounter = 0;
    let yearCounter = 0;
    const yearInterval = setInterval(() => {
      if (yearCounter < 3) {
        yearCounter++;
        setyearCount(yearCounter);
      } else {
        clearInterval(yearInterval);
      }
    }
    , 1000);
    // Simulate counting for projects and orders

    const projectInterval = setInterval(() => {
      if (projectCounter < 50) {
        projectCounter++;
        setProjectCount(projectCounter);
      } else {
        clearInterval(projectInterval);
      }
    }, 100);

    const orderInterval = setInterval(() => {
      if (orderCounter < 120) {
        orderCounter++;
        setOrderCount(orderCounter);
      } else {
        clearInterval(orderInterval);
      }
    }, 100);

    return () => {
      clearInterval(projectInterval);
      clearInterval(orderInterval);
      clearInterval(yearInterval);
    };
  }, []);

  // Toggle mobile-header class on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      if (window.scrollY > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    // Simulate a delay for loading (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="glowing-loader">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <span className="loading-text">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <ParallaxProvider>
      <AnimatePresence>
    <div className="app">
      {/* Scroll Progress Bar */}
      <div
            className="scroll-progress"
            style={{ width: `${scrollProgress}%` }}
          ></div>
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      {/* Header with Logo and Tagline */}
      <header className="header fade-in " role='banner' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="30">
        <div className="logo">
          <h1>Chidebe Chikamso</h1>
          <p>Building the Future, One Line of Code at a Time</p>
        </div>
        <nav className='desktop-nav'>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* <button className="menu-bar">
          Menu
          <div className="dropdown-links">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </button> */}
      </header>

      {/* Side-Sliding Menu
  <div className={`side-menu ${menuOpen ? "open" : ""}`}>
    <nav className="side-menu-nav">
      <h2>Menu</h2>
      <a href="#about" onClick={toggleMenu}>
        About
      </a>
      <a href="#portfolio" onClick={toggleMenu}>
        Portfolio
      </a>
      <a href="#pricing" onClick={toggleMenu}>
        Pricing
      </a>
      <a href="#faq" onClick={toggleMenu}>
        FAQ
      </a>
      <a href="#contact" onClick={toggleMenu}>
        Contact
      </a>
    </nav>
  </div> */}

  {/* Overlay */}
  {/* {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>} */}


      {/* Sidebar */}
      {/* <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <nav className="nav-links sidebar">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
          <a href="#pricing" onClick={toggleMenu}>Pricing</a>
          <a href="#faq" onClick={toggleMenu}>FAQ</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </div> */}

          {/* Side Menu */}
<div className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
  <div className="side-menu-header">
    <h2>Menu</h2>
    <button className="close-menu" onClick={toggleSideMenu}>
      <FaTimes />
    </button>
  </div>
  
  <div className="side-menu-content">
    <nav className="side-menu-nav">
      <a href="#" onClick={toggleSideMenu}>
        <FaHome /> Home
      </a>
      <a href="#about" onClick={toggleSideMenu}>
        <FaUser /> About
      </a>
      <a href="#portfolio" onClick={toggleSideMenu}>
        <FaBriefcase /> Portfolio
      </a>
      <a href="#skills" onClick={toggleSideMenu}>
        <FaCode /> Skills
      </a>
      <a href="#timeline" onClick={toggleSideMenu}>
        <FaChartBar /> Journey
      </a>
      <a href="#pricing" onClick={toggleSideMenu}>
        <FaDollarSign /> Pricing
      </a>
      <a href="#blog" onClick={toggleSideMenu}>
        <FaNewspaper /> Blog
      </a>
      <a href="#faq" onClick={toggleSideMenu}>
        <FaQuestionCircle /> FAQ
      </a>
      <a href="#contact" onClick={toggleSideMenu}>
        <FaEnvelope /> Contact
      </a>
    </nav>
    
    <div className="side-menu-actions">
      {/* <button className="action-button theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
      
      <button className="action-button resume-download" onClick={() => {
            setResumeModalOpen(true);
            document.body.style.overflow = 'hidden';
          }}>
            <FaDownload/> Download Resume
      </button>    
    </div>
    
    <div className="side-menu-social">
      <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/Chidebe-Chikamso" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:chikamsochidebe@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://wa.me/2349039220171" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  </div>
  
  <div className="side-menu-footer">
    <p>&copy; 2025 Chidebe Chikamso</p>
  </div>
</div>

{/* Overlay for closing the menu when clicking outside */}
{sideMenuOpen && <div className="side-menu-overlay" onClick={toggleSideMenu}></div>}

      {/* Mobile Header */}
      <div className={`mobile-header ${isScrolled ? 'scrolled' : ''}`} >
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#pricing" >Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" className='contact'>Contact</a>
      </div>

      {/* Landing Section */}
      <section className="landing fade-in" data-aos="fade-up">
         {/* Header2 */}
      <header className="header2">
        <div className="logo1">
          <h1><Fa500Px className='rotating-icon'/></h1> {/* Logo as the letter "C" */}
        </div>
        {/* <button className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
        </button> */}
        <button className="menu-toggle" onClick={toggleSideMenu} aria-label="Toggle menu">
            <FaBars />
        </button>
      </header>

        {/* Landing Section */}
      <section className="landing-hero fade-in" data-aos="fade-up">
            <div className="hero-background">
              <div className="animated-gradient"></div>
              <div className="texture-overlay"></div>
              <div className="particle-container">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
              </div>
            </div>
            
            {/* Header2 */}
            {/* <header className="header2 glass-effect">
              <div className="logo1">
                <h1><Fa500Px className='rotating-icon pulse-effect'/></h1>
              </div>
              <button className="menu-toggle glass-button" onClick={toggleSideMenu} aria-label="Toggle menu">
                <FaBars />
              </button>
            </header> */}

            <div className="hero-container">
              <div className="landing-content">
                <div className="title-container">
                  <h1 className="hero-title">
                    <span className="greeting">Hello, I'm </span>
                    <span className="name-highlight">{text}<Cursor cursorColor='#ff3e55'/></span>
                  </h1>
                </div>
                
                <div className="hero-description">
                  <p className="tagline">A passionate full-stack web developer crafting modern, scalable, and user-friendly digital experiences.</p>
                  
                  <div className="tech-stack">
                    <span className="tech-badge">React</span>
                    <span className="tech-badge">Node.js</span>
                    <span className="tech-badge">MongoDB</span>
                    <span className="tech-badge">Express</span>
                  </div>
                  
                  <div className="cta-container">
                    <a href="#portfolio" className="primary-cta">Explore My Work</a>
                    <a href="#contact" className="secondary-cta">Let's Connect</a>
                  </div>
                </div>
              </div>
              
              <div className="landing-visual">
                <div className="image-frame">
                  <img src="me4.JPG" alt="Chikamso" loading="lazy" />
                  <div className="image-overlay"></div>
                </div>
                <div className="social-icons">
                  <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/Chidebe-Chikamso" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:chikamsochidebe@gmail.com" className="social-icon">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="scroll-indicator">
              <span>Scroll Down</span>
              <FaChevronDown className="bounce" />
            </div>
          </section>
        </section>


      {/* About Me Section */}
      <main role="main">
      <section id="about" className="section fade-in" data-aos="fade-right">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I specialize in building seamless digital experiences by combining clean code with intuitive design. With expertise in both front-end and back-end technologies, I strive to deliver high-quality solutions that solve real-world problems.
          </p>
          {showMoreAbout && (
            <p>
              Over the years, I’ve worked on diverse projects ranging from e-commerce platforms to dynamic dashboards. I enjoy collaborating with teams, learning new technologies, and pushing the boundaries of what's possible in web development.
              On the front end, I specialize in crafting responsive and visually appealing interfaces using modern frameworks like React, ensuring that every design is both functional and aesthetically pleasing. On the back end, I excel in building robust and scalable systems with Node.js, Express, and MongoDB, enabling efficient data management and secure application performance. <br />
               Collaboration and continuous learning are at the core of my work ethic. I thrive in team environments, where I can contribute to innovative projects while learning from others. Whether it's developing an e-commerce platform, a dynamic dashboard, or a custom web application, I approach every project with a focus on clean code, intuitive design, and delivering value to users. <br />
              Driven by a love for problem-solving and a commitment to excellence, I am dedicated to building solutions that not only meet but exceed expectations. For me, web development is more than just a profession—it's a way to bring ideas to life and make a meaningful impact in the digital world.
            </p>
          )}
          <button onClick={toggleAbout} className="toggle-button text-red-600">
          {showMoreAbout ? (
                <>
                  Show Less <FaChevronUp />
                </>
              ) : (
                <>
                  Read More <FaChevronDown />
                </>
              )}
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <ModernAchievements />


      {/* Work Portfolio Section */}
      <section id="portfolio" className="section fade-in" data-aos="fade-up">
  <h2>Work Portfolio</h2>

  {/* Filter Buttons */}
  <div className="portfolio-filters">
    {["All", "Web Development", "UI/UX Design"].map((category) => (
      <button
        key={category}
        className={`filter-button ${selectedCategory === category ? "active" : ""}`}
        onClick={() => handleFilterChange(category)}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Portfolio Grid */}
  <div className="portfolio-grid">
    {filteredProjects.map((project) => (
      <div key={project.id} className="portfolio-item">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href="https://github.com/project" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
    ))}
  </div>
  </section>

    <section id="skills" className="section fade-in" data-aos="fade-up">
      <SkillRadarChart />
    </section>

      {/* Interactive Timeline Section */}
      <section id="timeline" className="section fade-in" data-aos="fade-right">
  <h2>My Journey</h2>
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "red", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid red" }}
      date="2023"
      iconStyle={{ background: "red", color: "#fff" }}
      icon={<FaCode />}
    >
      <h3 className="vertical-timeline-element-title">Started Web Development</h3>
      <p>Learned HTML, CSS, and JavaScript to build static websites.</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "black", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid black" }}
      date="2024"
      iconStyle={{ background: "black", color: "#fff" }}
      icon={<FaLaptopCode />}
    >
      <h3 className="vertical-timeline-element-title">Built My First Full-Stack App</h3>
      <p>Developed a full-stack application using React and Node.js.</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "red", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid red" }}
      date="2025"
      iconStyle={{ background: "red", color: "#fff" }}
      icon={<FaProjectDiagram />}
    >
      <h3 className="vertical-timeline-element-title">Collaborated on Large-Scale Projects</h3>
      <p>Worked with global teams to deliver scalable and user-friendly applications.</p>
    </VerticalTimelineElement>
  </VerticalTimeline>
</section>

        {/* Pricing Plans Section */}
      <section id="pricing" className="section fade-in" data-aos="fade-left">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic Plan</h3>
            <p>$99 / project</p>
            <ul>
              <li>1 Page Design</li>
              <li>Responsive Layout</li>
              <li>Email Support</li>
            </ul>
            <button className="hire-button" onClick={() => window.location.href = '#contact'}  tabIndex="0" aria-label="Hire me through the contact section">Hire Me</button>
          </div>
          <div className="pricing-card">
            <h3>Standard Plan</h3>
            <p>$199 / project</p>
            <ul>
              <li>Up to 5 Pages</li>
              <li>Responsive Layout</li>
              <li>Priority Support</li>
            </ul>
            <button className="hire-button" onClick={() => window.location.href = '#contact'} tabIndex="0" aria-label="Hire me through the contact section">Hire Me</button>
          </div>
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <p>$499 / project</p>
            <ul>
              <li>Unlimited Pages</li>
              <li>Custom Features</li>
              <li>24/7 Support</li>
            </ul>
            <button className="hire-button" onClick={() => window.location.href = '#contact'}  tabIndex="0" aria-label="Hire me through the contact section">Hire Me</button>
          </div>
        </div>
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
      </section>

      {/* Blog Section */}
      <section id="blog" className="section fade-in" data-aos="fade-up">
        <h2>Latest Insights</h2>
        <p className="section-subtitle">Thoughts, ideas, and insights from my journey as a developer</p>
        
  <div className="blog-grid">
    {blogPosts.map((post) => (
      <div 
        key={post.id} 
        className={`blog-card ${post.id === 2 ? 'featured' : ''}`}
        onClick={() => openBlogModal(post)}
      >
        <div className="blog-image">
          <img src={post.image} alt={post.title} loading="lazy" />
          <div className="blog-date">
            <span className="day">{post.date.split(' ')[0]}</span>
            <span className="month">{post.date.split(' ')[1]}</span>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-tags">
            {post.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <div className="blog-footer">
            <div className="blog-author">
              <img src="me3.jpg" alt="Author" />
              <span>By {post.author}</span>
            </div>
            <button className="read-more">Read More <FaArrowRight /></button>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  <div className="blog-cta">
    <h3>Want to read more articles?</h3>
    <a href="#blog" className="cta-button">View All Posts</a>
  </div>
</section>

{/* Add the BlogModal component at the end of your return statement */}
<BlogModal 
  post={selectedBlogPost} 
  isOpen={blogModalOpen} 
  onClose={closeBlogModal} 
/>
  <section id="testimonials1" className="section fade-in" data-aos="fade-up">
  <h2>What People Say</h2>
  <div className="testimonials-grid">
    <div className="testimonial-card">
      <p className="stars">
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </p>
      <blockquote><p>"Chidebe is an exceptional developer! Delivered beyond expectations."</p></blockquote>
      <cite>- John Smith</cite>
    </div>
    <div className="testimonial-card">
      <p className="stars">
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </p>
      <p>"Chikamso gives amazing work! Highly recommended."</p>
      <cite>- McDonald Swift</cite>
    </div>
    <div className="testimonial-card">
      <p className="stars">
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </p>
      <p>"Professional and timely delivery."</p>
      <cite>- Kolade Abiodun</cite>
    </div>
  </div>
</section> 


      <section id="testimonials" className="section fade-in" data-aos="fade-up">
      <h2>What People Say</h2>
      <div className="responsive-swiper">
        <Swiper
          modules={[Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 3000, // Slide changes every 3 seconds
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Makes pagination bullets dynamic
          }}
          navigation
          className="modern-swiper"
        >
          <SwiperSlide>
            <div className="review">
              <p className="stars">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Chidebe is an exceptional developer!"</p>
              <p>- John Smith</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review">
              <p className="stars">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Chikamso gives amazing work!"</p>
              <p>- McDonald Swift</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review">
              <p className="stars">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Professional and timely delivery."</p>
              <p>- Kolade Abiodun</p>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="review">
              <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Amazing attention to detail!"</p>
              <p>- Sarah Johnson</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="review">
              <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Delivered the project on time!"</p>
              <p>- Michael Brown</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="review">
              <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Highly skilled and professional!"</p>
              <p>- Emily Davis</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="review">
              <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
              <p>"Great experience!"</p>
              <p>- David Wilson</p>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </section>

      

      {/* FAQ Section */}
      <ModernFAQ/>

      {/* Contact Section */}
      {/* <section id="contacts" className="section fade-in" data-aos="fade-left">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the channels below:</p>
        <div className="contact-links" >
          <a href="https://wa.me/2349039220171" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> Whatsapp
          </a>
          <a href="https://m.me/chidebe-chikamso">
            <FaFacebook /> Facebook
          </a>
          <a href="mailto:chikamsochidebe@gmail.com">
            <FaEnvelope /> Email Me 
          </a>
          <a href="https://linkedin.com/in/Chidebe-Chikamso" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          
          <a href="tel:+2349039220171">
            <FaPhone /> Call Me
          </a>
        </div>
      </section>  */}

          {/* Toggle Button */}
          {/* <button
            className="chat-toggle"
            onClick={() => setShowChat(!showChat)}
          >
            {showChat ? "Close Chat" : "Chat with Me"}
          </button> */}

          {/* Chatbot */}
          {/* {showChat && (
            <div className="ai-chat-container">
              <AIChat />
            </div>
          )} */}
    </main>

       <ModernContactForm/>

      <footer className="footer fade-in" data-aos="fade-up">
        <p>&copy; 2025 Chidebe Chikamso. All rights reserved.</p>
      </footer>
      {/* Back to Top Button */}
      <button
        className={`back-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaChevronUp />
      </button>
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => {
          setResumeModalOpen(false);
          document.body.style.overflow = 'auto';
        }}
      />
    </div>
    </AnimatePresence>
    </ParallaxProvider>
  );
}
export default App;
