import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Typewriter from "typewriter-effect";
import image from "../../../assets/avnish-gate-image.png";
import gfg from "../../../assets/gfglogo.svg";
import leetcode from "../../../assets/leetcode-logo.png";

const Home: React.FC = () => {
  const handleTypingComplete = (id: string) => {
    const cursor = document.querySelector(`#${id} .Typewriter__cursor`);
    if (cursor) {
      cursor.classList.add("hide-cursor");
    }
  };

  return (
    <Container fluid className="p-0">
      {/* Hero Section with Gradient Background */}
      <div className="hero-section text-white py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                <Button href="#projects" className="me-2 mb-2" variant="outline-light" size="lg">
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

      {/* About Me Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: '#667eea' }}>About Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <p className="lead text-muted">
                  As a forward-thinking Full Stack Developer, I blend creativity with technical expertise to build 
                  innovative web solutions. My passion lies in exploring the intersections of web development and 
                  machine learning, constantly pushing the boundaries of what's possible in the digital realm.
                </p>
                <p className="lead text-muted">
                  With a keen eye for detail and a drive for excellence, I specialize in:
                </p>
                <ul className="lead text-muted">
                  <li>Crafting responsive and intuitive user interfaces</li>
                  <li>Developing robust and scalable backend systems</li>
                  <li>Integrating machine learning models to enhance application intelligence</li>
                  <li>Optimizing performance for seamless user experiences</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <div style={{ background: '#f8f9fa' }}>
        <Container className="py-5">
          <h2 className="text-center mb-4" style={{ color: '#667eea' }}>Featured Projects</h2>
          <Row>
            {[1, 2, 3].map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project}>
                <Card className="h-100 shadow-sm hover-lift">
                  <Card.Img variant="top" src={`https://picsum.photos/seed/${project}/300/200`} />
                  <Card.Body>
                    <Card.Title>Innovative Solution {project}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">React | Node.js | TensorFlow</Card.Subtitle>
                    <Card.Text>
                      A groundbreaking application that leverages cutting-edge technologies to address real-world challenges.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <div className="d-flex justify-content-between">
                      <Button variant="outline-primary" size="sm">View Details</Button>
                      <Button variant="outline-secondary" size="sm">Live Demo</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5 text-center">
        <h2 className="mb-4" style={{ color: '#667eea' }}>Let's Connect</h2>
        <p className="lead mb-4">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
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