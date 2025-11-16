// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Header & Navigation */}
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">Kwizera <span>Eli</span></a>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Kwizera Eli</h1>
          <div className="title">Building Construction Technician / Construction Specialist</div>
          <p>Dedicated construction professional with expertise in site supervision, construction methods, and project management. Committed to delivering high-quality construction projects on time and within budget.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Kwizera Eli" />
          </div>
          <div className="about-text">
            <h3>Building Construction Professional</h3>
            <p>I am a dedicated Building Construction Technician with extensive experience in construction supervision, project management, and quality control. My background includes comprehensive training in construction techniques and site management.</p>
            
            <h4>Education</h4>
            <p>Building Construction (TVET / Polytechnic / College)</p>
            
            <h4>Professional Strengths</h4>
            <div className="strengths">
              <div className="strength-item">
                <i className="fas fa-check-circle"></i>
                <span>Site supervision</span>
              </div>
              <div className="strength-item">
                <i className="fas fa-check-circle"></i>
                <span>Construction methods</span>
              </div>
              <div className="strength-item">
                <i className="fas fa-check-circle"></i>
                <span>Reading & interpreting building plans</span>
              </div>
              <div className="strength-item">
                <i className="fas fa-check-circle"></i>
                <span>Materials estimation</span>
              </div>
              <div className="strength-item">
                <i className="fas fa-check-circle"></i>
                <span>Construction safety practices</span>
              </div>
            </div>
            
            <a href="#" className="btn" style={{marginTop: '20px'}}>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const constructionSkills = [
    { name: 'Building Construction Techniques', icon: 'fas fa-tools' },
    { name: 'Site Management', icon: 'fas fa-hard-hat' },
    { name: 'Quantity Estimation', icon: 'fas fa-calculator' },
    { name: 'Masonry & Concrete Works', icon: 'fas fa-bricks' },
    { name: 'Roofing Works', icon: 'fas fa-home' },
    { name: 'Finishing Works', icon: 'fas fa-paint-roller' }
  ];

  const toolSkills = [
    { name: 'AutoCAD', icon: 'fas fa-drafting-compass' },
    { name: 'MS Excel for BoQ', icon: 'fas fa-file-excel' },
    { name: 'Measurement Tools', icon: 'fas fa-ruler-combined' },
    { name: 'Project Documentation', icon: 'fas fa-file-alt' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Construction Skills</h3>
            <div className="skill-items">
              {constructionSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skill.icon}></i>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Software</h3>
            <div className="skill-items">
              {toolSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skill.icon}></i>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'House Construction Supervision',
      description: 'Supervised the complete construction of a residential house from foundation to finishing.',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      tools: ['Site Supervision', 'Quality Control']
    },
    {
      id: 2,
      title: 'Single-Storey Residential Building',
      description: 'Managed construction of a complete single-storey residential building with all finishing works.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
      tools: ['Project Management', 'Material Estimation']
    },
    {
      id: 3,
      title: 'Foundation Layout and Construction',
      description: 'Executed precise foundation layout and supervised construction for a commercial building.',
      image: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      tools: ['Foundation Works', 'Blueprint Reading']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <a href="#" className="btn btn-outline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: 'fas fa-hard-hat',
      title: 'Building Construction Supervision',
      description: 'Professional supervision of construction projects ensuring quality, timeline, and budget adherence.'
    },
    {
      icon: 'fas fa-tools',
      title: 'House Renovation',
      description: 'Complete renovation services including structural modifications and interior upgrades.'
    },
    {
      icon: 'fas fa-bricks',
      title: 'Masonry Works',
      description: 'Expert masonry services including brickwork, blockwork, and stone construction.'
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Foundation & Concrete Works',
      description: 'Professional foundation construction and concrete works for all types of buildings.'
    },
    {
      icon: 'fas fa-calculator',
      title: 'Quantity Estimation',
      description: 'Accurate material and cost estimation for construction projects of all scales.'
    },
    {
      icon: 'fas fa-home',
      title: 'Roof Installation',
      description: 'Professional roof installation services using quality materials and proven techniques.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Site Technician',
      company: '[Company Name]',
      period: '2020 - Present',
      responsibilities: [
        'Supervising construction workers and subcontractors',
        'Conducting site measurements and layout',
        'Checking materials quality and compliance',
        'Preparing daily progress reports',
        'Ensuring adherence to safety protocols'
      ]
    },
    {
      id: 2,
      title: 'Building Construction Intern',
      company: '[Construction Company]',
      period: '2018 - 2020',
      responsibilities: [
        'Assisted in site supervision and management',
        'Learned construction techniques and methods',
        'Participated in material estimation and ordering',
        'Supported senior technicians in daily tasks'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <div className="date">{exp.company} | {exp.period}</div>
                <p>Responsibilities:</p>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+250 790231754</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>eliekwizera552@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>+250 790231754</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="form-control" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-control" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Kwizera Eli. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default App;