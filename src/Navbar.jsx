// Navbar.js - Complete with all features
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

  // Smooth scroll function
  const smoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'rw' : 'en');
  };

  // Language content
  const navContent = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    rw: {
      home: "Ahabanza",
      about: "Ibyanjye",
      skills: "Ubumenyi",
      projects: "Ibikorwa",
      contact: "Twandikire",
      hireMe: "Mpaye Akazi"
    }
  };

  const t = navContent[language];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        
        {/* Logo / Brand Name */}
        <div className="nav-logo">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('home');
            }}
            className="logo-link"
          >
            <span className="logo-icon">🏗️</span>
            <span className="logo-text">KWIZERA ELI</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll('home');
              }}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              {t.home}
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll('about');
              }}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              {t.about}
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll('skills');
              }}
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              {t.skills}
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll('projects');
              }}
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              {t.projects}
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll('contact');
              }}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              {t.contact}
            </a>
          </li>
        </ul>

        {/* Right Side Controls */}
        <div className="nav-controls">
          
          {/* Language Toggle */}
          <button 
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Kinyarwanda' : 'English'}`}
          >
            {language === 'en' ? 'RW' : 'EN'}
          </button>

          {/* Call to Action Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('contact');
            }}
            className="cta-button"
          >
            {t.hireMe}
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;