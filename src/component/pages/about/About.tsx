import React from 'react';
import { useTheme } from '../../theme-provider/ThemeContext';
import AcademicTimeline from './acadmic/AcadmicTimeline';
import { academicEntries, aboutData } from '../../../data/about/AboutData';
import SkillBar from '../../bar/skillbar/SkillBar';
import './About.css';
import ExperienceSection from './experience/ExperienceSection';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* About Me Section */}
        <section className="about-me-section py-5">
        <h1 className="section-title mb-4" style={{ color: '#667eea' }}>About Me</h1>
          <p className={`lead mb-4 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            As a forward-thinking <strong>Full Stack Developer</strong>, I blend creativity with technical expertise to build innovative web solutions. My passion lies in exploring the intersections of web development and machine learning, constantly pushing the boundaries of what's possible in the digital realm.
          </p>
          <p className={`lead mb-4 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            With a keen eye for detail and a drive for excellence, I specialize in:
          </p>
          <ul className={`lead ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            <li>🚀 Crafting responsive and intuitive user interfaces</li>
            <li>⚙️ Developing robust and scalable backend systems</li>
            <li>🧠 Integrating machine learning models to enhance application intelligence</li>
            <li>⚡ Optimizing performance for seamless user experiences</li>
          </ul>
        </section>

        {/* Academic Timeline Section */}
        
          <AcademicTimeline academicEntries={academicEntries} />
        

         {/* Experience Section */}
         <ExperienceSection />

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {aboutData.skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </section>

        {/* Prompting Skills Section */}
        <section className="prompting-section">
          <h2 className="section-title">Prompting Skills</h2>
          <p className="text-lg leading-relaxed font-light">
            As a skilled prompter, I excel in crafting effective prompts for AI models, enabling them to generate high-quality, relevant responses.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
