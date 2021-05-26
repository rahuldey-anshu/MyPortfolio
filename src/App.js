import React from 'react';
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import "./App.css";
import { Parallax } from "react-parallax";
//components
import MyCarousel from './components/my-carousel/MyCarousel';
import MyNav from "./components/My-Navbar/MyNav"
import TitleMessage from "./components/title-message/TitleMessage"
import About from "./pages/about/About"
import Skills from "./pages/skills/Skills";
import Projects from "./components/project-section/Projects"

import Experience from "./pages/experience/Experience"
const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     
      <MyCarousel />
      <MyNav />
      <TitleMessage />
      {/* about me section */}

      <div>
      <Parallax
          blur={{ min: -300, max: 30 }}
          // bgImage={require("./assets/img/parallex/background_reverse.webp")}
          bgImage="./assets/img/parallex/background.webp"
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* skills section */}
      <Container className="container-box rounded">
      <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
    
      
    </div>
  );
}

export default App;
