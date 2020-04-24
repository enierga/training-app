import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class Primary extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Dry Solids</h1>
        <h3>Primary Containment</h3>
        <br />
        <Row>
          <Col xs={4} md={4} className="text-center my-auto"><Image src="./Collection-Images/1-1.jpg" rounded style={{ width: "80%" }} /></Col>
          <Col xs={8} md={8} className="text-center my-auto">
            Orange autoclavable biohazard bag. Crisscross the bag's biohazard symbol and/or markings with heat sensitive autoclave tape.
                    <br /><br /><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Alert variant="danger" style={{ width: '50%' }}>NO SHARPS!</Alert></div>
          </Col>
        </Row>
        <br />
        <Nav prev="TypesQ2" next="Secondary" />
      </Container>);
  }
}