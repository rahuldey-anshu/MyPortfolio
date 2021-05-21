import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";
import slide1 from "../../assets/img/carousal/slide1.webp";
import slide2 from "../../assets/img/carousal/slide2.webp";
import slide3 from "../../assets/img/carousal/slide3.webp";
import ScrollDown from "../../components/scroll-down/ScrollDown"


const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}> 
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>I am a Technology Enthusiast</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img " src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>I have a deep passion for Engineering</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>I have a great appetite to learn something new & interesting</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    
    </div>
  );
};

export default MyCarousel;
