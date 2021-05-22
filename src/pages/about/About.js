import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import logo from "../../assets/Rahul1.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile picture */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  src={logo}
                  alt="profile"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              <Row className="align-items-start p-1 my-details rounded">
                Hi there everyone! I am <strong>&nbsp;Rahul Dey.</strong>
                <br /> <br />
                <h3 className="intended">
                  born and brought up in calcutta. I am working in Pitangent
                  Analytics and Technology Solutions Pvt. Ltd as a Junior
                  Full-Stack Developer(MERN STACK) with a passion for Frontend
                  and Backend development and design .<br />I hold a B.Tech
                  degree in Computer science & Engineering from Makaut in 2019.
                  Along with my degree i have done a training_course in core
                  java from Globsyn finishing school and i have learned various
                  technologies that helped me to develop projects during my
                  college called MindScript and Smart Student Organizer.
                  <br />I also got selected in Smart India Hackathon 2018, on my
                  project Development of Mind Education System.I got selected in
                  Anveshan 2k18. on the same project.Here's a few technologies
                  I've been working with recently:Javascript , React.js , Redux,
                  React-Hooks , Node.js ,Express.js , MongoDB, HTML ,CSS.I
                  aspire towards a career that will allow me to connect my
                  creativity through crafting beautiful software , Technologies
                  and engaging experiences.
                </h3>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/19Rat4mQpS_SUo5Ev8uv105HjAx7bhNah/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/rahuldey-anshu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/rahul-dey-320012169/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
