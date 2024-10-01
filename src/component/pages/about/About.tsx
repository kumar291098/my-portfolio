import React from "react";
import AcademicTimeline from "./acadmic/AcadmicTimeline";  // Import the AcademicTimeline component
import "./About.css"; // Assuming you have custom styles for the about page

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* About Me Section */}
      <div className="about-section text-center my-5">
        <h2 className="text-primary">About Me</h2>
        <p className="lead">
          I am Avnish Kumar, a full-stack developer and machine learning enthusiast, passionate about developing 
          innovative solutions to real-world problems. I have a keen interest in working with the latest web technologies
          and exploring the possibilities of machine learning models.
        </p>
      </div>

      {/* Academic Timeline Section */}
      <div className="academic-timeline-section">
        <AcademicTimeline /> {/* Use AcademicTimeline component here */}
      </div>

      {/* Other Sections */}
      <div className="other-section my-5 text-center">
        <h4 className="text-primary">My Skills</h4>
        <p className="lead">
          Experienced with React, Node.js, Machine Learning, Data Structures and Algorithms, and more.
        </p>
      </div>

      {/* Projects Section (Optional) */}
      <div className="projects-section text-center my-5">
        <h4 className="text-primary">My Projects</h4>
        {/* You can add more components here */}
      </div>
    </div>
  );
};

export default About;
