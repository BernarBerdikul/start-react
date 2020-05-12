import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {

  render() {
    return (
        <Container>
          <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
              <Row>
                  <Col sm={3}>
                      <Nav variant="pills" className="flex-column mt-2">
                          <Nav.Item>
                              <Nav.Link eventKey="first">Design</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="second">Team</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="third">Slava</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="fourth">Bernar</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="fifth">Mark</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Col>
                  <Col sm={9}>
                      <Tab.Content className="mt-3">
                          <Tab.Pane eventKey="first">
                              <img src="https://images6.alphacoders.com/556/thumb-350-556417.jpg" />
                              <p>Привет дорогой читатель, меня зовут Бернар</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                              <img src="https://images6.alphacoders.com/556/thumb-350-556417.jpg" />
                              <p>Привет дорогой читатель, меня зовут Бернар</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                              <img src="https://images6.alphacoders.com/556/thumb-350-556417.jpg" />
                              <p>Привет дорогой читатель, меня зовут Бернар</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fourth">
                              <img src="https://images6.alphacoders.com/556/thumb-350-556417.jpg" />
                              <p>Привет дорогой читатель, меня зовут Бернар</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fifth">
                              <img src="https://images6.alphacoders.com/556/thumb-350-556417.jpg" />
                              <p>Привет дорогой читатель, меня зовут Бернар</p>
                          </Tab.Pane>
                      </Tab.Content>
                  </Col>
              </Row>
          </Tab.Container>
        </Container>
    );
  }
}
