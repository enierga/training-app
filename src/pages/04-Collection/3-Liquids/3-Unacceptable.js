import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class LiqUnacc extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Biohazard Waste Collection'
        />
        <h1>Unacceptable Liquid Waste Disposal</h1>
        <br />
        <Row>
          <Col className="text-center my-auto"><Image src="./Collection-Images/3-3-1.png" rounded style={{ width: "10em" }} /></Col>
          <Col className="text-center my-auto"><Image src="./Collection-Images/3-3-2.jpg" rounded style={{ width: "12em" }} /></Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">Unlabeled, glass aspirator flask <br />on the ground (no secondary container)</Col>
          <Col className="text-center">Cardboard box as secondary container</Col>
        </Row>
        <br />
        <Nav prev="Flask" next="SharpsGen" />
      </Container>);
  }
}