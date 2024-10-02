import React from 'react';
import './SkillBar.css';

interface Skill {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<Skill> = ({ name, percentage }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = circumference - (percentage / 100) * circumference; // Progress calculation

  return (
    <div className="circular-skill-bar">
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
        <span className="skill-name">{name}</span>
        <span className="percentage">{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillBar;
