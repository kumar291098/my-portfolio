import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './projectCard/ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Smart Wi-Fi Management System',
      description: 'A Wi-Fi management system with real-time monitoring, error handling, and optimization features.',
      techStack: 'C, Python, Embedded Systems',
      githubLink: 'https://github.com/yourrepo/smart-wifi',
    },
    {
      title: 'Data Center Energy Management',
      description: 'A web-based application to manage energy consumption in data centers.',
      techStack: 'React, Node.js, MongoDB',
      githubLink: 'https://github.com/yourrepo/data-center-energy-management',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and technical skills.',
      techStack: 'React, TypeScript, Bootstrap 5',
      githubLink: 'https://github.com/yourrepo/portfolio-website',
    },
    // Add more projects as needed
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col lg={4} md={6} key={index} className="d-flex">
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsSection;
