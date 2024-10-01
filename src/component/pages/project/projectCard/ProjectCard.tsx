import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubLink }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Tech Stack: {techStack}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button 
          href={githubLink} 
          target="_blank" 
          variant="dark"
        >
          View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
