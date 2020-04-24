import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class DisUnacc extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Unacceptable Waste Disposal</h1>
        <br />
        <Row>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/2-1.jpg" rounded style={{ width: "12em" }} /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/2-2.jpg" rounded style={{ width: "12em" }} /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/2-3.jpg" rounded style={{ width: "12em" }} /></Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">Autoclave tape is not in the “X” over the biohazard symbol.</Col>
          <Col className="text-center">All bags must be in secondary containers. Do not leave bags in autoclave room or hallways.</Col>
          <Col className="text-center">Secondary container must be autoclavable and leakproof.</Col>
        </Row>
        <br />
        <Nav prev="ProcessB" next="AutocA" />
      </Container>);
  }
}