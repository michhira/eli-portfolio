// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
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