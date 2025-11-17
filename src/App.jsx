// App.js - Updated with new features
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    // Add dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Language content
  const content = {
    en: {
      // English content
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
      blog: "Blog",
      contact: "Contact"
    },
    rw: {
      // Kinyarwanda content
      hireMe: "Mpaye Akazi",
      viewProjects: "Reba Ibikorwa",
      aboutMe: "Ibyanjye",
      home: "Ahabanza",
      about: "Ibyanjye",
      skills: "Ubuhanga",
      projects: "Ibikorwa",
      gallery: "Amasanamu",
      services: "Serivisi",
      experience: "Uburambe",
      blog: "Blog",
      contact: "Twandikire"
    },
    fr: {
      // French content
      hireMe: "Engagez-Moi",
      viewProjects: "Voir Projets",
      aboutMe: "À Propos",
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      gallery: "Galerie",
      services: "Services",
      experience: "Expérience",
      blog: "Blog",
      contact: "Contact"
    }
  };

  const t = content[language];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Header with new features */}
      <Header 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      
      {/* Rest of your sections */}
      <HeroSection t={t} />
      <AboutSection t={t} />
      <SkillsSection />
      <ProjectsSection />
      <GallerySection />
      <ServicesSection t={t} />
      <ExperienceSection />
      <TestimonialsSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

// Updated Header Component with new features
const Header = ({ menuOpen, toggleMenu, darkMode, toggleDarkMode, language, setLanguage }) => {
  // Language content for header
  const headerContent = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      gallery: "Gallery",
      services: "Services",
      experience: "Experience",
      blog: "Blog",
      contact: "Contact"
    },
    rw: {
      home: "Ahabanza",
      about: "Ibyanjye",
      skills: "Ubuhanga",
      projects: "Ibikorwa",
      gallery: "Amasanamu",
      services: "Serivisi",
      experience: "Uburambe",
      blog: "Blog",
      contact: "Twandikire"
    },
    fr: {
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      gallery: "Galerie",
      services: "Services",
      experience: "Expérience",
      blog: "Blog",
      contact: "Contact"
    }
  };

  const ht = headerContent[language];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">Kwizera <span>Eli</span></a>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>{ht.home}</a></li>
            <li><a href="#about" onClick={toggleMenu}>{ht.about}</a></li>
            <li><a href="#skills" onClick={toggleMenu}>{ht.skills}</a></li>
            <li><a href="#projects" onClick={toggleMenu}>{ht.projects}</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>{ht.gallery}</a></li>
            <li><a href="#services" onClick={toggleMenu}>{ht.services}</a></li>
            <li><a href="#experience" onClick={toggleMenu}>{ht.experience}</a></li>
            <li><a href="#blog" onClick={toggleMenu}>{ht.blog}</a></li>
            <li><a href="#contact" onClick={toggleMenu}>{ht.contact}</a></li>
          </ul>

          <div className="header-controls">
            {/* Language Selector */}
            <select 
              className="language-selector"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="rw">RW</option>
              <option value="fr">FR</option>
            </select>

            {/* Dark Mode Toggle */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            {/* Mobile Menu Toggle */}
            <div className="menu-toggle" onClick={toggleMenu}>
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// New Blog Section Component
const BlogSection = () => {
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
    },
    {
      id: 3,
      title: 'Kurinda abakora mu bwubatsi',
      excerpt: 'Ingamba zo kurinda abakozi mu bwubatsi nubwuzuzanye bwabo...',
      date: 'October 10, 2023',
      category: 'Safety',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2>Blog & Insights</h2>
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
          <a href="#" className="btn btn-outline">Reba Blog Yose</a>
        </div>
      </div>
    </section>
  );
};

// Updated Hero Section with animations
const HeroSection = ({ t }) => {
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
            <a href="#contact" className="btn">
              <i className="fas fa-briefcase"></i> {t.hireMe}
            </a>
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-eye"></i> {t.viewProjects}
            </a>
          </div>
          
          {/* Stats */}
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
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

// Stub components for missing sections
const AboutSection = ({ t }) => (
  <section id="about" className="about">
    <div className="container">
      <h2>{t.aboutMe}</h2>
      <p>About section content...</p>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="skills">
    <div className="container">
      <h2>Skills</h2>
      <p>Skills section content...</p>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2>Projects</h2>
      <p>Projects section content...</p>
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="gallery">
    <div className="container">
      <h2>Gallery</h2>
      <p>Gallery section content...</p>
    </div>
  </section>
);

const ServicesSection = ({ t }) => (
  <section id="services" className="services">
    <div className="container">
      <h2>Services</h2>
      <p>Services section content...</p>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="experience">
    <div className="container">
      <h2>Experience</h2>
      <p>Experience section content...</p>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <h2>Testimonials</h2>
      <p>Testimonials section content...</p>
    </div>
  </section>
);

const CertificationsSection = () => (
  <section id="certifications" className="certifications">
    <div className="container">
      <h2>Certifications</h2>
      <p>Certifications section content...</p>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2>Contact</h2>
      <p>Contact section content...</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2023 Kwizera Eli. All rights reserved.</p>
    </div>
  </footer>
);
