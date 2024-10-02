import React from 'react';
import { useTheme } from '../../../theme-provider/ThemeContext';
import { aboutData } from '../../../../data/about/AboutData';
import './ExperienceSection.css';

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`experience-section mt-5 ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline"></div>
      <div className="experience-list">
        {aboutData.experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="company-info">
              <h3 className="job-title">{job.title} - {job.company}</h3>
              <p className="job-duration">{job.duration}</p>
              <p className="job-description">{job.description}</p>
            </div>
            <div className="project-list">
              <h4 className="projects-title">Projects</h4>
              {job.projects?.map((project, projectIndex) => (
                <div key={projectIndex} className="project-item">
                  <div className="project-header">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-timeline">{project.timeline}</p>
                  </div>
                  <p className="project-details">{project.details}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
