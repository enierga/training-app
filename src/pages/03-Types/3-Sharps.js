import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Sharps extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Types of Biohazard Waste'
        />
        <h1>Sharps</h1>
        <p>
          Ability to puncture or cut the skin
                </p>
        <ListGroup style={{ width: '80%', margin: '0 auto' }}>
          <ListGroup.Item>Needles</ListGroup.Item>
          <ListGroup.Item>Microscope slides</ListGroup.Item>
          <ListGroup.Item>Scalpels</ListGroup.Item>
          <ListGroup.Item>Razor blades</ListGroup.Item>
          <ListGroup.Item>Pasteur pipettes</ListGroup.Item>
          <ListGroup.Item>Broken glass</ListGroup.Item>
        </ListGroup><br />
        <Row>
          <Col className="text-center my-auto">
            <Image src="./Types-Images/sharps-razors.jpg" rounded style={{ width: '15em', marginRight: "1em" }} />
            <Image src="./Types-Images/sharps-scalpels.jpg" rounded style={{ width: '13em', marginRight: "1em" }} />
            <Image src="./Types-Images/sharps-needles.jpg" rounded style={{ width: '15em' }} />
          </Col>
        </Row>
        <br />
        <Nav prev="Liquids" next="Path" />
      </Container>);
  }
}