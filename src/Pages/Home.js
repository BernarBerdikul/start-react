import React, { Component } from 'react'
import CarouselBox from "../Components/CarouselBox"
import Cards from "../Components/Cards"
import { Container, CardDeck, Card , Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox />
      <Container>
          <h2 className="text-center m-4">Our news</h2>
          <CardDeck className="m-4">
              <Cards />
              <Cards />
              <Cards />
          </CardDeck>
      </Container>
      </>
    );
  }
}
