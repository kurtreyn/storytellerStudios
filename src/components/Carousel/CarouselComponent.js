import React from 'react';
import { Carousel } from 'react-bootstrap';

import greyAmbulance from '../../assets/images/grey-ambulance.png';
import sharleneBobbyRay from '../../assets/images/sharleneBobbyRayC45.png';
import ghostCreator from '../../assets/images/ghost-creator.png';
import ghostJeep from '../../assets/images/ghost-jeep.png';

export default function CarouselComponent() {
  return (
    <Carousel className="carousel-container" controls={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={greyAmbulance} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sharleneBobbyRay}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={ghostCreator} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={ghostJeep} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}
