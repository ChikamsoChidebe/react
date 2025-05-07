import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaStar, FaChevronDown, FaBars, FaTimes, Fa500Px, FaFacebook, FaFacebookF, FaWhatsapp, FaChevronUp } from 'react-icons/fa';
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
 

function App() {
  const [showChat, setShowChat] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [projectCount, setProjectCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [yearCount, setyearCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
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
    words: ['Hi, I am Chikamso Chidebe', 'Web Developer', 'UI/UX Designer', 'Tech Enthusiast', 'Freelancer'],
    loop: 0,
    typeSpeed: 50, // Faster typing speed
    deleteSpeed: 50, // Faster deleting speed
    delaySpeed: 300, // Shorter delay before typing the next word
  });

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <nav>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu-bar">
          Menu
          <div className="dropdown-links">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </button>
      </header>

      {/* Header2 */}
      <header className="header2">
        <div className="logo1">
          <h1><Fa500Px className='rotating-icon'/></h1> {/* Logo as the letter "C" */}
        </div>
        {/* <button className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between menu and close icons */}
        {/* </button> */} 
      </header>

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
        <div className="landing-content">
          <h1><span>{text}</span><Cursor cursorColor='red'/> </h1>
          <p>A passionate full-stack web developer creating modern, scalable, and user-friendly applications.</p>
          <a href="#portfolio" className="cta-button">Explore My Work</a> {/* Updated to use an anchor link */}
        </div>
        <div className="landing-visual">
          <img src="me3.jpg" alt="Custom Illustration" loading="lazy" />
        </div>
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
            {showMoreAbout ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section fade-in" data-aos="fade-left">
        <h2>My Achievements</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{projectCount}+</h3>
            <p>Projects Completed</p>
            <div className="status-bar">
              <div
                className="status-bar-fill"
                style={{ width: `${(projectCount / 50) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="stat-item">
            <h3>{orderCount}+</h3>
            <p>Orders Delivered</p>
            <div className="status-bar">
              <div
                className="status-bar-fill"
                style={{ width: `${(orderCount / 120) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="stat-item">
            <h3>{yearCount}+</h3>
            <p>Years Experience</p>
            <div className="status-bar">
              <div
                className="status-bar-fill"
                style={{ width: `${(yearCount / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

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
      </section>

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
      <section id="faq" className="section fade-in" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          {[
            { question: 'What services do you offer?', answer: 'I offer full-stack web development, UI/UX design, and consulting services.' },
            { question: 'What technologies do you specialize in?', answer: 'I specialize in React, Javascript, CSS, and modern front-end frameworks.' },
            { question: 'How can I hire you?', answer: 'You can hire me by selecting a pricing plan or contacting me directly through the contact section.' },
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <FaChevronDown className={`faq-icon ${faqOpen === index ? 'open' : ''}`} />
              </div>
              {faqOpen === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section fade-in" data-aos="fade-left">
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
          <a href="https://linkedin.com/in/chidebe-chikamso" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/ChikamsoChidebe" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          
          <a href="tel:+2349039220171">
            <FaPhone /> Call Me
          </a>
        </div>
      </section>

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
    </div>
    </AnimatePresence>
    </ParallaxProvider>
  );
}
export default App;