import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class SolidsUnacc extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Unacceptable Waste Disposal</h1>
        <br />
        <Row>
          <Col className="text-center my-auto"><Image src="./Collection-Images/1-3-1.jpg" rounded style={{ width: "70%" }} /></Col>
          <Col className="text-center my-auto"><Image src="./Collection-Images/1-3-2.jpg" rounded style={{ width: "70%" }} /></Col>
          <Col className="text-center my-auto"><Image src="./Collection-Images/1-3-3.jpg" rounded style={{ width: "70%" }} /></Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">Non-biohazard bag as primary container. Stacking biohazard waste containers.</Col>
          <Col className="text-center">Keeping the lid propped open. (The lid should only be open when actively adding waste to the container.)</Col>
          <Col className="text-center">Using a cardboard box as a secondary container.</Col>
        </Row>
        <br />
        <Nav prev="Secondary" next="TipsA" />
      </Container>);
  }
}