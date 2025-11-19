// pages/ContactPage.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.');
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's discuss your construction project or inquiry.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container contact-container">

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out for any construction projects or consultations.</p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+250 790231754</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>eliekwizera552@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+250 790231754</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <ul>
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, requirements, timeline, and budget..."
                  required
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="alert-success">Message sent successfully! I will get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="alert-error">Failed to send message. Please try again later.</p>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
