// components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode, language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/experience', label: 'Experience' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            Kwizera <span>Eli</span>
          </Link>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
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
              <i className="fas fa-download"></i> Download CV
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

export default Navbar;