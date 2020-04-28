import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default class AutocA extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Biohazard Waste Disposal'
        />
        <h1>Autoclaving Overview</h1>
        <p>
          DO NOT enclose the cardboard boxes used for gathering sharps/glass within an autoclave bag. This will prevent steam penetration during autoclaving. Steam penetration is crucial during the decontaminating process.
                </p>
        <br />
        <Row>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/3A1.png" rounded style={{ width: "10em" }} /></Col>
          <Col className="text-center my-auto"><FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="3x" /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/3A2.jpg" rounded style={{ width: "10em" }} /></Col>
          <Col className="text-center my-auto"><FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="3x" /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/3A3.png" rounded style={{ width: "8em" }} /></Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">Loosely close the biohazard bag inside of the box.</Col>
          <Col className="text-center"></Col>
          <Col className="text-center">Place the entire box with contents into the autoclave.</Col>
          <Col className="text-center"></Col>
          <Col className="text-center">After autoclaving, place the box into the larger containers for autoclave trash.</Col>
        </Row>
        <br />
        <Nav prev="DisUnacc" next="AutocB" />
      </Container>);
  }
}