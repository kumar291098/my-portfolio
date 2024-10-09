import React from 'react';
import { useTheme } from '../../theme-provider/ThemeContext';
import AcademicTimeline from './acadmic/AcadmicTimeline';
import { academicEntries } from '../../../data/about/AboutData';
import SkillBar from '../../bar/skillbar/SkillBar';
import './About.css';
import ExperienceSection from './experience/ExperienceSection';
import { FaArrowRight } from 'react-icons/fa';

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
          <ul className={`custom-list lead ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            <li className="list-item">
              <FaArrowRight className="list-icon" /> <span className="list-text">Crafting responsive and intuitive user interfaces</span>
            </li>
            <li className="list-item">
              <FaArrowRight className="list-icon" /> <span className="list-text">Developing robust and scalable backend systems</span>
            </li>
            <li className="list-item">
              <FaArrowRight className="list-icon" /> <span className="list-text">Integrating machine learning models to enhance application intelligence</span>
            </li>
            <li className="list-item">
              <FaArrowRight className="list-icon" /> <span className="list-text">Optimizing performance for seamless user experiences</span>
            </li>
          </ul>
        </section>

        {/* Academic Timeline Section */}
       
        <AcademicTimeline academicEntries={academicEntries} />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillBar />

        {/* Prompting Skills Section */}
        {/* <section className="prompting-section">
          <h2 className="section-title">Prompting Skills</h2>
          <p className="text-lg leading-relaxed font-light">
            Prompting is a skill that involves effectively interacting with chatbots to elicit high-quality responses.
          </p>
        </section> */}

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Avnish kumar. All rights reserved.</p>
          <p>
            <a href="/contact">Contact</a> | <a href="/portfolio">Portfolio</a> | <a href="/blog">Blog</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
