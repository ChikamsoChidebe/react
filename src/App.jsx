import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaStar, FaChevronDown,  } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [projectCount, setProjectCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [yearCount, setyearCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
      if (yearCounter < 10) {
        yearCounter++;
        setyearCount(yearCounter);
      } else {
        clearInterval(yearInterval);
      }
    }
    , 100);
    // Simulate counting for projects and orders

    const projectInterval = setInterval(() => {
      if (projectCounter < 50) {
        projectCounter++;
        setProjectCount(projectCounter);
      } else {
        clearInterval(projectInterval);
      }
    }, 50);

    const orderInterval = setInterval(() => {
      if (orderCounter < 120) {
        orderCounter++;
        setOrderCount(orderCounter);
      } else {
        clearInterval(orderInterval);
      }
    }, 30);

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
    <div className="app">
      {/* Header with Logo and Tagline */}
      <header className="header fade-in">
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

      {/* Mobile Header */}
      <div className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>

      {/* landing  */}
      <section className="landing fade-in">
        <div className="landing-content">
          <h1>Hi, I'm Chidebe Chikamso</h1>
          <p>A passionate full-stack web developer creating modern, scalable, and user-friendly applications.</p>
          <button className="cta-button">Explore My Work</button>
        </div>
        <div className="landing-visual">
          <img src="me2.jpg" alt="Custom Illustration" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section fade-in">
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
          <button onClick={toggleAbout} className="toggle-button">
            {showMoreAbout ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section fade-in">
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
                style={{ width: `${(yearCount / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Portfolio Section */}
      <section id="portfolio" className="section fade-in">
        <h2>Work Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>Project 1</h3>
            <p>An e-commerce platform with a modern design.</p>
            <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>
          </div>
          <div className="portfolio-item">
            <h3>Project 2</h3>
            <p>A sleek portfolio website showcasing my skills.</p>
            <a href="https://github.com/project2" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>
          </div>
          <div className="portfolio-item">
            <h3>Project 3</h3>
            <p>A blog platform with user authentication.</p>
            <a href="https://github.com/project3" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section id="timeline" className="section fade-in">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2024</h3>
            <p>Started my journey as a web developer, learning HTML, CSS, and JavaScript.</p>
          </div>
          <div className="timeline-item">
            <h3>2025</h3>
            <p>Built my first full-stack application using React and Node.js.</p>
          </div>
          <div className="timeline-item">
            <h3>2026</h3>
            <p>Worked on multiple large-scale projects and collaborated with global teams.</p>
          </div>
        </div>
      </section>

        {/* Pricing Plans Section */}
      <section id="pricing" className="section fade-in">
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
            <button className="hire-button">Hire Me</button>
          </div>
          <div className="pricing-card">
            <h3>Standard Plan</h3>
            <p>$199 / project</p>
            <ul>
              <li>Up to 5 Pages</li>
              <li>Responsive Layout</li>
              <li>Priority Support</li>
            </ul>
            <button className="hire-button">Hire Me</button>
          </div>
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <p>$499 / project</p>
            <ul>
              <li>Unlimited Pages</li>
              <li>Custom Features</li>
              <li>24/7 Support</li>
            </ul>
            <button className="hire-button">Hire Me</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section fade-in">
        <h2>What People Say</h2>
        <div className="reviews-grid">
          <div className="review">
            <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p>"Chidebe is an exceptional developer! Delivered beyond expectations."</p>
            <p>- Client 1</p>
          </div>
          <div className="review">
            <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p>"Amazing work! Highly recommended."</p>
            <p>- Client 2</p>
          </div>
          <div className="review">
            <p className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p>"Professional and timely delivery."</p>
            <p>- Client 3</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section fade-in">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          {[
            { question: 'What services do you offer?', answer: 'I offer full-stack web development, UI/UX design, and consulting services.' },
            { question: 'What technologies do you specialize in?', answer: 'I specialize in React, Node.js, MongoDB, and modern front-end frameworks.' },
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
      <section id="contact" className="section fade-in">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the channels below:</p>
        <div className="contact-links" >
          <a href="mailto:chidebe.chikamso@example.com">
            <FaEnvelope /> Email Me 
          </a>
          <a href="https://linkedin.com/in/chidebe-chikamso" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/chidebe-chikamso" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHubu
          </a>
          <a href="tel:+1234567890">
            <FaPhone /> Call Me
          </a>
        </div>
      </section>

      <footer className="footer fade-in">
        <p>&copy; 2025 Chidebe Chikamso. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;