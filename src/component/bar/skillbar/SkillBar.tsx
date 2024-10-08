import React from 'react';
import './SkillBar.css';
import { aboutData } from '../../../data/about/AboutData';
interface Skill {
  name: string;
  percentage: number;
}



const SkillBar: React.FC = () => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {aboutData.skills.map((skill, index) => {
          const progress = circumference - (skill.percentage / 100) * circumference; // Progress calculation

          return (
            <div key={index} className="circular-skill-bar">
              <svg width="120" height="120" className="relative">
                {/* Background Circle */}
                <circle
                  stroke="#e0e0e0"
                  strokeWidth="12"
                  fill="transparent"
                  r={radius}
                  cx="60"
                  cy="60"
                  className="background-circle"
                />
                {/* Foreground Circle */}
                <circle
                  stroke="url(#gradient)" // Using gradient color
                  strokeWidth="12"
                  fill="transparent"
                  r={radius}
                  cx="60"
                  cy="60"
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                  className="progress-circle"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="skill-info text-center mt-3">
                <span className="skill-name">{skill.name}</span>
                <span className="percentage">{skill.percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillBar;
