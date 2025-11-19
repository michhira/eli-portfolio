// pages/ExperiencePage.js
import React from 'react';

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      title: 'Site Technician',
      company: 'Construction Solutions Ltd',
      period: '2020 - Present',
      duration: '4 years',
      location: 'Kigali, Rwanda',
      responsibilities: [
        'Supervising construction workers and subcontractors',
        'Conducting site measurements and layout',
        'Checking materials quality and compliance',
        'Preparing daily progress reports',
        'Ensuring safety protocols are followed',
        'Coordinating with architects and engineers'
      ],
      skills: ['Site Supervision', 'Quality Control', 'Team Management']
    },
    {
      id: 2,
      title: 'Building Construction Intern',
      company: 'Rwanda Builders Co.',
      period: '2018 - 2020',
      duration: '2 years',
      location: 'Kigali, Rwanda',
      responsibilities: [
        'Assisted in site supervision and management',
        'Learned construction techniques and methods',
        'Participated in material estimation and ordering',
        'Supported quality control processes',
        'Gained experience in blueprint reading'
      ],
      skills: ['Construction Methods', 'Material Estimation', 'Blueprint Reading']
    }
  ];

  return (
    <div className="experience-page">
      <section className="page-hero">
        <div className="container">
          <h1>Work Experience</h1>
          <p>My professional journey in construction</p>
        </div>
      </section>

      <section className="experience-content">
        <div className="container">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <i className="fas fa-hard-hat"></i>
                </div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="company">
                        <i className="fas fa-building"></i> {exp.company}
                      </span>
                      <span className="period">
                        <i className="fas fa-calendar"></i> {exp.period}
                      </span>
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="experience-details">
                    <div className="duration-badge">
                      <i className="fas fa-clock"></i> {exp.duration}
                    </div>

                    <h4>Key Responsibilities:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="experience-skills">
                      <h4>Skills Used:</h4>
                      <div className="skills-tags">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-summary">
            <h2>Professional Summary</h2>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
