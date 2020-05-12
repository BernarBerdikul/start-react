import React, { Component } from 'react';
import { Container, Media, Row, Col, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Media.Body>
                <h5>Post</h5>
                <p>Some text texttexttext
texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
text text text text
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                  <Card.Text>
                  Some text texttexttext
                  texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                  text text text text
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
