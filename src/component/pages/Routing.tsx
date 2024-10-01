import React from 'react';
import {  Routes, Route } from 'react-router-dom';
// import Header from './components/Layout/Header';
import Home from './home/Home';
import About from './about/About';
import ProjectsSection from './project/ProjectsSection';
import ResumeSection from './resume/ResumeSection';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

const Routing: React.FC = () => {
  return (
   
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/resume" element={<ResumeSection />} />

        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    
  );
};

export default Routing;
