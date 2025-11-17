// pages/ServicesPage.js
import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      icon: 'fas fa-hard-hat',
      title: 'Building Construction Supervision',
      description: 'Professional supervision of construction projects ensuring quality, timeline, and budget adherence. Regular site inspections and progress monitoring.',
      features: ['Quality Control', 'Timeline Management', 'Budget Monitoring', 'Site Safety']
    },
    {
      icon: 'fas fa-tools',
      title: 'House Renovation',
      description: 'Complete renovation services including structural modifications, interior upgrades, and exterior improvements for residential properties.',
      features: ['Structural Modifications', 'Interior Design', 'Exterior Upgrades', 'Material Selection']
    },
    {
      icon: 'fas fa-bricks',
      title: 'Masonry Works',
      description: 'Expert masonry services including brickwork, blockwork, stone construction, and concrete works for durable and aesthetic structures.',
      features: ['Brickwork', 'Blockwork', 'Stone Construction', 'Concrete Works']
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Foundation & Concrete Works',
      description: 'Professional foundation construction and concrete works for all types of buildings, ensuring structural integrity and stability.',
      features: ['Foundation Layout', 'Concrete Pouring', 'Structural Planning', 'Quality Assurance']
    },
    {
      icon: 'fas fa-calculator',
      title: 'Quantity Estimation',
      description: 'Accurate material and cost estimation for construction projects of all scales, helping with budget planning and resource allocation.',
      features: ['Material Estimation', 'Cost Analysis', 'Budget Planning', 'Resource Allocation']
    },
    {
      icon: 'fas fa-home',
      title: 'Roof Installation',
      description: 'Professional roof installation services using quality materials and proven techniques for weather protection and building longevity.',
      features: ['Roof Design', 'Material Selection', 'Installation', 'Waterproofing']
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>My Services</h1>
          <p>Professional construction services for residential and commercial projects</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-outline service-inquiry-btn">
                  Request Service
                </button>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact me for a free consultation and project estimate</p>
            <div className="cta-buttons">
              <a href="tel:+250790231754" className="btn">
                <i className="fas fa-phone"></i> Call Now
              </a>
              <a href="mailto:eliekwizera552@gmail.com" className="btn btn-outline">
                <i className="fas fa-envelope"></i> Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;