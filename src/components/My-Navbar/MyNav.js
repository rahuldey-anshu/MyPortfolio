import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo1 from "../../assets/logo1.PNG";
import "./MyNav.css"

const MyNav = () => {
  return (
    <>
      <Navbar fixed = "top" collapseOnSelect expand="md" variant="dark"  className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">
          <img className ="logo" src={logo1}  alt="my-portfolio logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNav;
