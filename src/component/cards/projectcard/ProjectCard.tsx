import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTheme } from '../../theme-provider/ThemeContext';
import './ProjectCard.css'; // Importing the CSS file

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  image: string;
  githubLink: string;
  liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  githubLink,
  liveDemoLink,
}) => {
  const { theme } = useTheme();
  console.log('Image URL:', image);
  return (
    <Card className={`project-card h-100 shadow-sm ${theme}-mode`}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title className={`card-title ${theme}-text`}>{title}</Card.Title>
        <Card.Subtitle className={`mb-2 text-muted ${theme}-text`}>
          {techStack}
        </Card.Subtitle>
        <Card.Text className={`card-description ${theme}-text`}>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className={`bg-white border-0 ${theme}-footer`}>
        <div className="d-flex justify-content-between">
          <Button
            href={githubLink}
            variant="outline-primary"
            size="sm"
          >
            GitHub
          </Button>
          <Button
            href={liveDemoLink}
            variant="outline-secondary"
            size="sm"
          >
            Live Demo
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
