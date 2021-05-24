import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import L_pitangent from "../../assets/img/experience/pitangent.jpg";
import Container from "react-bootstrap/Container";
import "./Experience.css";


const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  varient="top"
                  className="img-resize"
                  src={L_pitangent}
                  alt="Pitangent logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                  Pitangent Analytics and Technology Solutions Pvt. Ltd.
                  <br />
                   
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Junior Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> Javascript , React JS, Redux , Node.js , Express.js , MongoDB , Git.
                    
                    <br />
                    <strong>Duration:</strong> Dec 2020 - Present
                    <br />
                    <strong>Job Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> React application from Scratch.
                      </li>
                      <li>
                      <strong>Building an E-Commerce application</strong>
                        {/* <strong>Developed</strong> automation system to create
                        SQL bulk query scripts that increased efficiency by 80%
                        and decreased working hours from 4 hours to 30 mins per
                        task.
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements. */}
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
