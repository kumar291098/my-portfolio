import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import './AcadmicTimeline.css';

const AcademicTimeline: React.FC = () => {
  // Update the state to allow 'null' as a valid value
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const toggleProject = (project: string | null) => {
    // Set the selected project or reset it if null is passed
    setSelectedProject(project);
  };

  return (
    <div className="academic-timeline">
      <div className="card-container">
        {/* Technocrats Institute of Technology */}
        <Card
          className="academic-card"
          onClick={() => toggleProject("Technocrats")}
          onMouseEnter={() => toggleProject("Technocrats")}
          onMouseLeave={() => toggleProject(null)}  
        >
          <Card.Body>
            <Card.Title>Technocrats Institute of Technology</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              BE in Information Technology (2016 - 2020)
            </Card.Subtitle>
            <Card.Text>
              CGPA: 7.83
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Projects for Technocrats */}
        <Collapse in={selectedProject === "Technocrats"}>
          <div className="project-list">
            <ul>
              <li>
                <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">
                  Project 1 - Description and Tech Stack
                </a>
              </li>
              <li>
                <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">
                  Project 2 - Description and Tech Stack
                </a>
              </li>
            </ul>
          </div>
        </Collapse>

        {/* IIT Bhubaneswar */}
        <Card
          className="academic-card"
          onClick={() => toggleProject("IITBhubaneswar")}
          onMouseEnter={() => toggleProject("IITBhubaneswar")}
          onMouseLeave={() => toggleProject(null)}  
        >
          <Card.Body>
            <Card.Title>IIT Bhubaneswar</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              M.Tech in Computer Science (2021 - 2023)
            </Card.Subtitle>
            <Card.Text>
              CGPA: 7.97
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Projects for IIT Bhubaneswar */}
        <Collapse in={selectedProject === "IITBhubaneswar"}>
          <div className="project-list">
            <ul>
              <li>
                <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">
                  Project 1 - Description and Tech Stack
                </a>
              </li>
              <li>
                <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">
                  Project 2 - Description and Tech Stack
                </a>
              </li>
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default AcademicTimeline;
