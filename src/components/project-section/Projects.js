import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import L_ShopIT from "../../assets/img/projects/shopIT.PNG";
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import "./Projects.css"

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
      <Timeline>
        <Events>
        {/* Project ShopIT-Ecommerce appliction */}
          <ImageEvent
            date="01/10/2020"
            className="text-center"
            src={L_ShopIT }
            alt="React ToDo App"
          >
              <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                      <Accordion>
                          <Card>
                              <Accordion.Toggle as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main">
                      Project Details

                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                      <strong>Name:</strong> ShopIT
                      <hr />
                        <strong>Description:</strong> This is an Ecommerce application created frontend with React.js , JSX , Css , state management using Redux and Backend wirh Node, express and MongoDB is using as a Database. Here i can view products without signup or signin , purchase product but signin is required then. we can make payments online .
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>View Products</li>
                          <li>Signup & Signin</li>
                          <li>Purchase product</li>
                          <li>Products add to kart functionality</li>
                          <li>Make payments</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX }
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="nodejs"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Nodejs
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                          </Card>
                      </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton href="https://github.com/rahuldey-anshu/ShopIT-Ecommerce_app" target="_blank">
                      See source-code
                    </UrlButton>
                  </div>
              </div>
          </ImageEvent>

          {/* Second project */}
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;
