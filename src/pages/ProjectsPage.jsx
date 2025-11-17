// pages/ProjectsPage.js
import React, { useState } from 'react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'House Construction Supervision',
      description: 'Supervised the complete construction of a residential house from foundation to finishing, ensuring quality standards and timeline adherence.',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      category: 'residential',
      tools: ['Site Supervision', 'Quality Control', 'Project Management'],
      duration: '6 months',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Single-Storey Residential Building',
      description: 'Managed construction of a complete single-storey residential building with all finishing works including plumbing and electrical installations.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
      category: 'residential',
      tools: ['Material Estimation', 'Team Management', 'Budget Control'],
      duration: '8 months',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Foundation Layout and Construction',
      description: 'Executed precise foundation layout and supervised construction for a commercial building project.',
      image: 'https://images.unsplash.com/photo-1581094794325-841d48b18e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      category: 'commercial',
      tools: ['Foundation Works', 'Blueprint Reading', 'Structural Planning'],
      duration: '3 months',
      status: 'Completed'
    }
  ];

  const categories = ['all', 'residential', 'commercial', 'renovation'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1>Projects Portfolio</h1>
          <p>Construction projects I have supervised and managed</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          {/* Filters */}
          <div className="projects-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>{project.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-tag"></i>
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <div className="project-tools">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                  
                  <button className="btn btn-outline project-details-btn">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;