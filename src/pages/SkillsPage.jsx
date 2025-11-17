// pages/SkillsPage.js - No Scrolling Version
import React from 'react';

const SkillsPage = () => {
  const constructionSkills = [
    { name: 'Building Construction', icon: 'fas fa-tools', level: 95 },
    { name: 'Site Management', icon: 'fas fa-hard-hat', level: 90 },
    { name: 'Quantity Estimation', icon: 'fas fa-calculator', level: 88 },
    { name: 'Masonry Works', icon: 'fas fa-bricks', level: 92 }
  ];

  const toolSkills = [
    { name: 'AutoCAD', icon: 'fas fa-drafting-compass', level: 80 },
    { name: 'MS Excel', icon: 'fas fa-file-excel', level: 85 },
    { name: 'Measurement Tools', icon: 'fas fa-ruler', level: 95 }
  ];

  const SkillBar = ({ skill }) => (
    <div className="skill-bar-item">
      <div className="skill-info">
        <i className={skill.icon}></i>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="skills-page">
      <section className="page-hero">
        <div className="container">
          <h1>Skills & Expertise</h1>
          <p>Professional competencies in construction</p>
        </div>
      </section>

      <section className="skills-content">
        <div className="container">
          <div className="skills-categories">
            <div className="skill-category">
              <h2>Construction Skills</h2>
              <div className="skills-list">
                {constructionSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h2>Tools & Software</h2>
              <div className="skills-list">
                {toolSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;