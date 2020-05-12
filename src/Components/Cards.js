import React, { Component } from 'react'
import { Card , Button } from "react-bootstrap";

export default class Cards extends Component {
  render() {
    return (
      <>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Berana banana amana barabana fortaba nabana
                    </Card.Text>
                    <Button variant="primary">Read</Button>
                </Card.Body>
            </Card>
      </>
    );
  }
}
