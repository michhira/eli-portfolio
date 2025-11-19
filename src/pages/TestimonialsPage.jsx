// pages/TestimonialsPage.js
import React, { useState } from 'react';

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Mugisha',
      position: 'Home Owner',
      company: 'Private Residence',
      content: 'Kwizera supervised the construction of my house with exceptional professionalism. His attention to detail and quality control ensured we got a perfect home. The project was completed on time and within budget. Highly recommended!',
      rating: 5,
      project: 'Residential House Construction',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 2,
      name: 'Marie Uwase',
      position: 'Business Owner',
      company: 'Uwase Enterprises',
      content: 'The commercial building project was completed on time and within budget. Kwizera\'s expertise in construction management is impressive. His knowledge of local building codes and materials made the process smooth and efficient.',
      rating: 5,
      project: 'Commercial Building',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 3,
      name: 'Peter Nkurunziza',
      position: 'Project Manager',
      company: 'Kigali Construction Ltd',
      content: 'Working with Kwizera on multiple projects has been a great experience. His technical knowledge and dedication to quality work make him an invaluable asset to any construction team.',
      rating: 5,
      project: 'Multi-Project Collaboration',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      name: 'Grace Mukamana',
      position: 'Architect',
      company: 'Design & Build Rwanda',
      content: 'Kwizera\'s understanding of construction techniques and his ability to translate architectural plans into reality is outstanding. He ensures that every detail is executed perfectly.',
      rating: 5,
      project: 'Architectural Implementation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonials-page">
      <section className="page-hero">
        <div className="container">
          <h1>Testimonials</h1>
          <p>What my clients say about my work</p>
        </div>
      </section>

      <section className="testimonials-content">
        <div className="container">
          {/* Featured Testimonial */}
          <div className="featured-testimonial">
            <div className="testimonial-card featured">
              <div className="testimonial-header">
                <div className="client-image">
                  <img src={currentTestimonial.image} alt={currentTestimonial.name} />
                </div>
                <div className="client-info">
                  <h3>{currentTestimonial.name}</h3>
                  <p className="position">{currentTestimonial.position}</p>
                  <p className="company">{currentTestimonial.company}</p>
                  <div className="rating">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                </div>
              </div>

              <div className="testimonial-content">
                <blockquote>
                  <i className="fas fa-quote-left quote-icon"></i>
                  {currentTestimonial.content}
                  <i className="fas fa-quote-right quote-icon"></i>
                </blockquote>
                <div className="project-info">
                  <span className="project-tag">
                    <i className="fas fa-project-diagram"></i> {currentTestimonial.project}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="testimonial-navigation">
              <button className="nav-btn prev-btn" onClick={prevTestimonial}>
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                  ></button>
                ))}
              </div>

              <button className="nav-btn next-btn" onClick={nextTestimonial}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>



          {/* Call to Action */}
          <div className="testimonials-cta">
            <h2>Ready to Start Your Project?</h2>
            <p>Join our satisfied clients and experience quality construction services</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
              <a href="/projects" className="btn btn-outline">
                <i className="fas fa-eye"></i> View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
