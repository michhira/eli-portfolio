// App.js - Complete with all sections defined
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Smooth scroll function
  const smoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    }
    setMenuOpen(false);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'gallery', 'services', 'experience', 'testimonials', 'certifications', 'blog', 'contact'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      setTimeout(() => {
        smoothScroll(hash);
      }, 100);
    }
  }, []);

  // Language content
  const content = {
    en: {
      hireMe: "Hire Me",
      viewProjects: "View Projects",
      aboutMe: "About Me",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      gallery: "Gallery",
      services: "Services",
      experience: "Experience",
      testimonials: "Testimonials",
      certifications: "Certifications",
      blog: "Blog",
      contact: "Contact",
      downloadCV: "Download CV",
      viewDetails: "View Details",
      sendMessage: "Send Message",
      seeAllBlog: "See All Blog Posts",
      professionalStrengths: "Professional Strengths",
      education: "Education",
      servicesTitle: "My Services",
      experienceTitle: "Work Experience",
      testimonialsTitle: "Client Testimonials",
      certificationsTitle: "Certifications & Qualifications",
      blogTitle: "Blog & Insights",
      contactTitle: "Get In Touch"
    },
    rw: {
      hireMe: "Mpaye Akazi",
      viewProjects: "Reba Ibikorwa",
      aboutMe: "Ibyanjye",
      home: "Ahabanza",
      about: "Ibyanjye",
      skills: "Ubuhanga",
      projects: "Ibikorwa",
      gallery: "Amashusho",
      services: "Serivisi",
      experience: "Uburambe",
      testimonials: "Ibyo Abakiriye Serivisi Bavuga",
      certifications: "Ibyangombwa",
      blog: "Inkuru",
      contact: "Twandikire",
      downloadCV: "Kuramo CV",
      viewDetails: "Reba Ibyinshi",
      sendMessage: "Ohereza Ubutumwa",
      seeAllBlog: "Reba Inkuru Zose",
      professionalStrengths: "Imbaraga Z'Umwuga",
      education: "Amasomo",
      servicesTitle: "Serivisi Zanjye",
      experienceTitle: "Uburambe bwa Kazi",
      testimonialsTitle: "Ibyo Abakiriye Serivisi Bavuga",
      certificationsTitle: "Ibyangombwa n'Ubuhanga",
      blogTitle: "Inkuru n'Ubumenyi",
      contactTitle: "Vugana Natwe"
    }
  };

  const t = content[language];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        smoothScroll={smoothScroll}
        t={t}
      />
      
      <HeroSection t={t} smoothScroll={smoothScroll} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ProjectsSection t={t} />
      <GallerySection t={t} />
      <ServicesSection t={t} />
      <ExperienceSection t={t} />
      <TestimonialsSection t={t} />
      <CertificationsSection t={t} />
      <BlogSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </div>
  );
};

// Header Component
const Header = ({ menuOpen, toggleMenu, darkMode, toggleDarkMode, language, setLanguage, activeSection, smoothScroll, t }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'gallery', 'services', 'experience', 'testimonials', 'certifications', 'blog', 'contact'];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a 
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('home');
            }}
          >
            Kwizera <span>Eli</span>
          </a>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(section);
                  }}
                >
                  {t[section]}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-controls">
            <select 
              className="language-selector"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="rw">RW</option>
            </select>

            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <a href="/cv.pdf" download className="btn btn-download">
              <i className="fas fa-download"></i> {t.downloadCV}
            </a>

            <div className="menu-toggle" onClick={toggleMenu}>
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = ({ t, smoothScroll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1>Kwizera Eli</h1>
          <div className="title">Building Construction Technician / Construction Specialist</div>
          <p>Dedicated construction professional with expertise in site supervision, construction methods, and project management. Committed to delivering high-quality construction projects on time and within budget.</p>
          <div className="hero-buttons">
            <button 
              className="btn"
              onClick={() => smoothScroll('contact')}
            >
              <i className="fas fa-briefcase"></i> {t.hireMe}
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => smoothScroll('projects')}
            >
              <i className="fas fa-eye"></i> {t.viewProjects}
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{t.aboutMe}</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Kwizera Eli" />
          </div>
          <div className="about-text">
            <h3>Building Construction Professional</h3>
            <p>I am a dedicated Building Construction Technician with extensive experience in construction supervision, project management, and quality control. My background includes comprehensive training in construction techniques and site management.</p>
            
            <h4>{t.education}</h4>
            <p>Building Construction (TVET / Polytechnic / College)</p>
            
            <h4>{t.professionalStrengths}</h4>
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
            
            <a href="/cv.pdf" download className="btn">
              <i className="fas fa-download"></i> {t.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = ({ t }) => {
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
        <h2>{t.skills}</h2>
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
const ProjectsSection = ({ t }) => {
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
        <h2>{t.projects}</h2>
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
                <a href="#" className="btn btn-outline">
                  {t.viewDetails}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Site Supervision',
      category: 'supervision'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      title: 'Foundation Works',
      category: 'foundation'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      title: 'House Construction',
      category: 'construction'
    }
  ];

  const categories = ['all', 'supervision', 'foundation', 'construction'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>{t.gallery}</h2>
        <p className="section-subtitle">Amashusho y'ibikorwa byubwubatsi byakozwe</p>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h4>{image.title}</h4>
                  <span className="category-tag">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setSelectedImage(null)}>
                <i className="fas fa-times"></i>
              </span>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>Category: {selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = ({ t }) => {
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
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{t.servicesTitle}</h2>
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
const ExperienceSection = ({ t }) => {
  const experiences = [
    {
      id: 1,
      title: 'Site Technician',
      company: 'Construction Solutions Ltd',
      period: '2020 - Present',
      responsibilities: [
        'Supervising construction workers and subcontractors',
        'Conducting site measurements and layout',
        'Checking materials quality and compliance',
        'Preparing daily progress reports'
      ]
    },
    {
      id: 2,
      title: 'Building Construction Intern',
      company: 'Rwanda Builders Co.',
      period: '2018 - 2020',
      responsibilities: [
        'Assisted in site supervision and management',
        'Learned construction techniques and methods',
        'Participated in material estimation and ordering'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>{t.experienceTitle}</h2>
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

// Testimonials Section Component
const TestimonialsSection = ({ t }) => {
  const testimonials = [
    {
      id: 1,
      name: 'John Mugisha',
      position: 'Home Owner',
      content: 'Kwizera supervised the construction of my house with exceptional professionalism. His attention to detail and quality control ensured we got a perfect home.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marie Uwase',
      position: 'Business Owner',
      content: 'The commercial building project was completed on time and within budget. Kwizera\'s expertise in construction management is impressive.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>{t.testimonialsTitle}</h2>
        <p className="section-subtitle">What my clients say about my work</p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section Component
const CertificationsSection = ({ t }) => {
  const certifications = [
    {
      id: 1,
      title: 'Building Construction Technician',
      issuer: 'Rwanda TVET Board',
      date: '2020',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Construction Safety Certification',
      issuer: 'Rwanda Construction Authority',
      date: '2021',
      image: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>{t.certificationsTitle}</h2>
        <p className="section-subtitle">Professional certifications and training</p>
        
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">Issued: {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section Component
const BlogSection = ({ t }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'Ubwubatsi bwa Moderne muri Rwanda',
      excerpt: 'Uko imikoreshereze ya technologie mu bwubatsi iri gukura mu Rwanda...',
      date: 'December 15, 2023',
      category: 'Construction',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Ubwubatsi bw\'Inzu zishingiye ku Gihugu',
      excerpt: 'Uburyo dushobora kubaka inzu zikoresheje ibikoresho byo mu Rwanda...',
      date: 'November 28, 2023',
      category: 'Sustainability',
      readTime: '4 min read'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2>{t.blogTitle}</h2>
        <p className="section-subtitle">Amakuru n'ubumenyi ku bwubatsi</p>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={`https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sig=${post.id}`} 
                     alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="fas fa-calendar"></i> {post.date}
                  </span>
                  <span className="blog-read-time">
                    <i className="fas fa-clock"></i> {post.readTime}
                  </span>
                </div>
                <a href="#" className="blog-read-more">
                  Soma byinshi <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="#" className="btn btn-outline">{t.seeAllBlog}</a>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = ({ t }) => {
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
        <h2>{t.contactTitle}</h2>
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
              <button type="submit" className="btn">
                <i className="fas fa-paper-plane"></i> {t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Kwizera Eli</h3>
            <p>Building Construction Technician & Construction Specialist</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2023 Kwizera Eli. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;