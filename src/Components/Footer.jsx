// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kwizera Eli</h3>
            <p>Building Construction Technician & Construction Specialist dedicated to delivering high-quality construction projects.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Construction Supervision</Link></li>
              <li><Link to="/services">House Renovation</Link></li>
              <li><Link to="/services">Masonry Works</Link></li>
              <li><Link to="/services">Quantity Estimation</Link></li>
              <li><Link to="/services">Roof Installation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> +250 790231754</p>
              <p><i className="fas fa-envelope"></i> eliekwizera552@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Kwizera Eli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;