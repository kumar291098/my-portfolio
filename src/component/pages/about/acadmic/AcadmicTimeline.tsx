import React, { useState } from 'react';
import { useTheme } from '../../../theme-provider/ThemeContext';
import './AcadmicTimeline.css';
import { FaUniversity, FaProjectDiagram, FaBook } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface AcademicEntry {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  coursework?: string[];
  projects: Project[];
}

interface AcademicTimelineProps {
  academicEntries: AcademicEntry[];
}

const AcademicTimeline: React.FC<AcademicTimelineProps> = ({ academicEntries }) => {
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const toggleExpand = (index: number) => {
    setExpandedEntry(expandedEntry === index ? null : index);
  };

  return (
    <section className={`timeline-section ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="timeline-container">
        <h2 className="timeline-heading">Academic Timeline</h2>
        <div className="timeline-content">
          {academicEntries.map((entry, index) => (
            <div
              key={index}
              className={`timeline-card ${expandedEntry === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="card-header">
                <FaUniversity className="icon university-icon" />
                <div className="institution-info">
                  <h3 className="institution-name">{entry.institution}</h3>
                  <p className="degree">{entry.degree}</p>
                </div>
                <div className="duration-cgpa">
                  <p className="duration">{entry.duration}</p>
                  <span className="cgpa-badge">CGPA: {entry.cgpa}</span>
                </div>
              </div>

              {/* Expanded Section */}
              {expandedEntry === index && (
                <div className="card-body">
                  <h4 className="coursework-heading">
                    <FaBook className="icon book-icon" /> Coursework
                  </h4>
                  <ul className="coursework-list">
                    {entry.coursework?.map((course, i) => (
                      <li key={i} className="coursework-item">
                        {course}
                      </li>
                    ))}
                  </ul>

                  <h4 className="projects-heading">
                    <FaProjectDiagram className="icon project-icon" /> Projects
                  </h4>
                  <div className="projects-grid">
                    {entry.projects.map((project, projIndex) => (
                      <a
                        key={projIndex}
                        href={project.link}
                        className="project-card"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 className="project-title">{project.title}</h5>
                        <p className="project-description">{project.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicTimeline;
