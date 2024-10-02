import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../../cards/projectcard/ProjectCard';
import { projects } from '../../../data/projectList';

const ProjectsSection: React.FC = () => {
 
  

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
              image={project.image}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsSection;
