import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel";
import half_on_orange from "../assets/half_on_orange.jpg";
import rocket_2 from "../assets/rocket_2.png";
import rocket from "../assets/rocket.png";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={half_on_orange}
                  alt="Half_on_orange"
              />
              <Carousel.Caption>
                  <h3>Half_on_orange image</h3>
                  <p>DJ by Monstercat</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={rocket_2}
                  alt="Rocket_2"
              />
              <Carousel.Caption>
                  <h3>Rocket 2 image</h3>
                  <p>Game in Steam</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={rocket}
                  alt="Rocket"
              />
              <Carousel.Caption>
                  <h3>Rocket image</h3>
                  <p>Game in Steam</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    );
  }
}
