import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Typewriter from "typewriter-effect";
import image from "../../../assets/avnish-gate-image.png";
import gfg from "../../../assets/gfglogo.svg";
import leetcode from "../../../assets/leetcode-logo.png";
import ProjectCard from '../../cards/projectcard/ProjectCard';
import { projects } from '../../../data/projectList';
import { useTheme } from '../../theme-provider/ThemeContext'; // Import the useTheme hook

const Home: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme

  const handleTypingComplete = (id: string) => {
    const cursor = document.querySelector(`#${id} .Typewriter__cursor`);
    if (cursor) {
      cursor.classList.add("hide-cursor");
    }
  };

  return (
    <Container fluid className={`p-0 ${theme === 'dark' ? 'bg-dark' : ''}`}>
      {/* Hero Section with Gradient Background */}
      <div className={`hero-section text-white py-5 ${theme === 'dark' ? 'bg-black' : ''}`} style={{
        background: theme === 'dark' ? 'black' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img
                src={image}
                alt="Avnish Kumar"
                className="rounded-circle img-fluid shadow-lg"
                style={{ maxWidth: "200px", border: '4px solid white' }}
              />
            </Col>
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-3">
                <div id="typewriter-1">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Hello, I'm Avnish Kumar")
                        .callFunction(() => handleTypingComplete("typewriter-1"))
                        .start();
                    }}
                    options={{
                      loop: false,
                      cursor: "|",
                      delay: 75,
                      deleteSpeed: Infinity,
                    }}
                  />
                </div>
              </h1>
              <h4 className="mb-4">
                <div id="typewriter-2">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Innovative Full Stack Developer | Machine Learning Enthusiast"
                        )
                        .callFunction(() => handleTypingComplete("typewriter-2"))
                        .start();
                    }}
                    options={{
                      loop: false,
                      cursor: "|",
                      delay: 50,
                      deleteSpeed: Infinity,
                    }}
                  />
                </div>
              </h4>
              <p className="lead mb-4">
                Transforming visionary ideas into cutting-edge digital solutions. 
                Passionate about crafting seamless user experiences and leveraging AI to solve complex challenges.
              </p>
              <div className="d-flex flex-wrap justify-content-start mt-3">
                <Button href="/projects" className="me-2 mb-2" variant="outline-light" size="lg">
                  Explore My Projects
                </Button>
                <Button
                  href="https://github.com/kumar291098"
                  className="mb-2"
                  variant="light"
                  size="lg"
                >
                  <GitHubIcon className="me-2" /> GitHub Portfolio
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      

      {/* Projects Section */}
      <div style={{ background: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }}>
        <Container className="py-5">
          <h2 className="text-center mb-4" style={{ color: '#667eea' }}>Featured Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
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
      </div>

      {/* Contact Section */}
      <Container className={`py-5 text-center ${theme === 'dark' ? 'bg-black text-white' : ''}`}>
        <h2 className="mb-4" style={{ color: '#667eea' }}>Let's Connect</h2>
        <p className={`lead mb-4 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          <Button href="mailto:avnishkumar29101998@gmail.com" className="m-2" variant="outline-danger" size="lg">
            <EmailIcon className="me-2" /> Email Me
          </Button>
          <Button href="https://www.linkedin.com/in/avnish-kumar1998/" className="m-2" variant="outline-primary" size="lg">
            <LinkedInIcon className="me-2" /> LinkedIn
          </Button>
          <Button href="https://www.geeksforgeeks.org/user/kumara291098/" className="m-2" variant="outline-success" size="lg">
            <img src={gfg} alt="GeeksforGeeks" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
            GeeksforGeeks
          </Button>
          <Button href="https://leetcode.com/u/Avnishkumar123/" className="m-2" variant="outline-warning" size="lg">
            <img src={leetcode} alt="LeetCode" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
            LeetCode
          </Button>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2023 Avnish Kumar. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Home;
