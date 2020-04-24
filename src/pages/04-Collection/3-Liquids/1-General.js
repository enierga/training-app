import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class LiqGen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Liquid Biological Waste</h1>
        <br />
        <Row>
          <Col xs={4} md={4} className="text-center my-auto"><Image src="./Collection-Images/3-1.png" rounded style={{ width: "10em" }} /></Col>
          <Col xs={8} md={8} className="my-auto">
            <ul>
              <li>Collect in a non-breakable container with a secure lid and labeled with biohazard symbol.</li>
              <li>If kept on the floor, the container must be in a leakproof secondary container that can contain the entire volume if spilled.</li>
            </ul>
          </Col>
        </Row>
        <br />
        <Nav prev="PlasticB" next="Flask" />
      </Container>);
  }
}