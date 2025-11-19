// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <h1>Kwizera Eli</h1>
            <div className="title">Building Construction Technician / Construction Specialist</div>
            <p>Dedicated construction professional with expertise in site supervision, construction methods, and project management.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn">
                <i className="fas fa-briefcase"></i> Hire Me
              </Link>
              <Link to="/projects" className="btn btn-outline">
                <i className="fas fa-eye"></i> View Projects
              </Link>
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
          
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Quick Sections Preview */}
      <section className="preview-section">
        <div className="container">
          <div className="preview-grid">
            <div className="preview-card">
              <i className="fas fa-tools"></i>
              <h3>Skills & Expertise</h3>
              <p>Building construction techniques, site management, quantity estimation</p>
              <Link to="/skills" className="preview-link">Learn More →</Link>
            </div>
            
            <div className="preview-card">
              <i className="fas fa-hard-hat"></i>
              <h3>Projects</h3>
              <p>Residential and commercial construction projects</p>
              <Link to="/projects" className="preview-link">View Projects →</Link>
            </div>
            
            <div className="preview-card">
              <i className="fas fa-cogs"></i>
              <h3>Services</h3>
              <p>Construction supervision, renovation, masonry works</p>
              <Link to="/services" className="preview-link">Our Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;