// pages/AboutPage.js - No Scrolling Version
import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Me</h1>
          <p>Building Construction Professional</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" alt="Kwizera Eli" />
            </div>
            
            <div className="about-text">
              <h2>Building Construction Professional</h2>
              <p>I am a dedicated Building Construction Technician with extensive experience in construction supervision, project management, and quality control.</p>
              
              <div className="about-details">
                <div className="detail-group">
                  <h3>Education</h3>
                  <p>Building Construction (TVET / Polytechnic / College)</p>
                </div>
                
                <div className="detail-group">
                  <h3>Professional Strengths</h3>
                  <div className="strengths-grid">
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
                      <span>Reading building plans</span>
                    </div>
                    <div className="strength-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Materials estimation</span>
                    </div>
                    <div className="strength-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Safety practices</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="/cv.pdf" download className="btn">
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;