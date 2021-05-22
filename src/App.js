import React from 'react';
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

import "./App.css";
import { Parallax } from "react-parallax";
//components
import MyCarousel from './components/my-carousel/MyCarousel';
import MyNav from "./components/My-Navbar/MyNav"
import TitleMessage from "./components/title-message/TitleMessage"
import About from "./pages/about/About"


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     
      <MyCarousel />
      <MyNav />
      <TitleMessage />
      
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
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
    
      
    </div>
  );
}

export default App;
