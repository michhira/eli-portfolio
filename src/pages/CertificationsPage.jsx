// pages/CertificationsPage.js
import React from 'react';

const CertificationsPage = () => {
  const certifications = [
    {
      id: 1,
      title: 'Building Construction Technician',
      issuer: 'Rwanda TVET Board',
      date: '2020',
      expiry: '2025',
      description: 'Comprehensive certification in building construction techniques, site management, and construction safety practices.',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      skills: ['Construction Techniques', 'Site Management', 'Safety Practices'],
      downloadLink: '#'
    },
    {
      id: 2,
      title: 'Construction Safety Certification',
      issuer: 'Rwanda Construction Authority',
      date: '2021',
      expiry: '2024',
      description: 'Advanced certification in construction safety protocols, risk assessment, and emergency response procedures.',
      image: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      skills: ['Safety Protocols', 'Risk Assessment', 'Emergency Response'],
      downloadLink: '#'
    },
    {
      id: 3,
      title: 'Quantity Estimation & Costing',
      issuer: 'Rwanda Institute of Quantity Surveyors',
      date: '2022',
      expiry: '2027',
      description: 'Professional certification in material estimation, cost analysis, and project budgeting for construction projects.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      skills: ['Material Estimation', 'Cost Analysis', 'Project Budgeting'],
      downloadLink: '#'
    },
    {
      id: 4,
      title: 'AutoCAD for Construction',
      issuer: 'Autodesk Authorized Training Center',
      date: '2021',
      expiry: '2026',
      description: 'Certified proficiency in AutoCAD software for architectural and construction drawings, plans, and documentation.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      skills: ['AutoCAD', 'Technical Drawing', 'Blueprint Reading'],
      downloadLink: '#'
    }
  ];

  return (
    <div className="certifications-page">
      <section className="page-hero">
        <div className="container">
          <h1>Certifications & Qualifications</h1>
          <p>Professional certifications and training in construction</p>
        </div>
      </section>

      <section className="certifications-content">
        <div className="container">
          <div className="certifications-intro">
            <h2>Professional Qualifications</h2>
            <p>Continuous learning and professional development are essential in the construction industry. Here are my key certifications and qualifications that demonstrate my commitment to excellence and staying current with industry standards.</p>
          </div>

          <div className="certifications-grid">
            {certifications.map(cert => (
              <div key={cert.id} className="certification-card">
                <div className="certification-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certification-overlay">
                    <button className="download-btn" title="Download Certificate">
                      <i className="fas fa-download"></i>
                    </button>
                  </div>
                </div>

                <div className="certification-content">
                  <div className="certification-header">
                    <h3>{cert.title}</h3>
                    <div className="issuer-badge">
                      <i className="fas fa-certificate"></i>
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="certification-meta">
                    <div className="meta-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Issued: {cert.date}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>Expires: {cert.expiry}</span>
                    </div>
                  </div>

                  <p className="certification-description">{cert.description}</p>

                  <div className="certification-skills">
                    <h4>Key Skills:</h4>
                    <div className="skills-list">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="skill-chip">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="certification-actions">
                    <button className="btn btn-outline verify-btn">
                      <i className="fas fa-shield-alt"></i> Verify Certificate
                    </button>
                    <button className="btn btn-outline download-btn">
                      <i className="fas fa-download"></i> Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-summary">
            <h2>Continuous Professional Development</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="summary-content">
                  <h3>Education</h3>
                  <p>Building Construction Technician Diploma from Rwanda TVET Board</p>
                </div>
              </div>

              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="summary-content">
                  <h3>Technical Skills</h3>
                  <p>Proficient in AutoCAD, MS Excel, construction software, and modern building techniques</p>
                </div>
              </div>

              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="summary-content">
                  <h3>Professional Training</h3>
                  <p>Ongoing training in safety standards, sustainable construction, and project management</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications-cta">
            <h2>Need Construction Services?</h2>
            <p>With these qualifications and experience, I'm ready to help with your construction project</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">
                <i className="fas fa-envelope"></i> Contact Me
              </a>
              <a href="/services" className="btn btn-outline">
                <i className="fas fa-tools"></i> View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
