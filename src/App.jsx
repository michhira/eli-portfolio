// App.js - Complete with all sections defined
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import Components
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

// Import Pages
import HomePage from './pages/Homepage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';

import CertificationsPage from './pages/CertificationsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

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

      certificationsTitle: "Ibyangombwa n'Ubuhanga",
      blogTitle: "Inkuru n'Ubumenyi",
      contactTitle: "Vugana Natwe"
    }
  };

  const t = content[language];

  return (
    <div className={`App no-scroll ${darkMode ? 'dark' : ''}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main className="main-content no-scroll">
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/skills" element={<SkillsPage t={t} />} />
          <Route path="/projects" element={<ProjectsPage t={t} />} />
          <Route path="/gallery" element={<GalleryPage t={t} />} />
          <Route path="/services" element={<ServicesPage t={t} />} />
          <Route path="/experience" element={<ExperiencePage t={t} />} />

          <Route path="/certifications" element={<CertificationsPage t={t} />} />
          <Route path="/blog" element={<BlogPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} />} />
        </Routes>
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;