import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Mixed extends Component {
  render() {
    return (
      <Container>
        <Header
          header='Types of Biohazard Waste'
        />
        <h1>Mixed Waste</h1>
        <p>
          Biological waste contaminated with hazardous chemicals, radioactive substances, or carcinogens require <b>special disposal by EHS</b>.
                </p>
        <Row>
          <Col className="text-center my-auto">
            <Image src="./Types-Images/mixed1.jpg" rounded style={{ width: '8em', marginRight: "1em" }} />
            <Image src="./Types-Images/mixed2.jpg" rounded style={{ width: '8em', marginRight: "1em" }} />
            <Image src="./Types-Images/mixed3.jpg" rounded style={{ width: '8em', marginRight: "1em" }} />
            <Image src="./Types-Images/mixed4.jpg" rounded style={{ width: '8em', marginRight: "1em" }} />
            <Image src="./Types-Images/mixed5.jpg" rounded style={{ width: '8em' }} />
          </Col>
        </Row>

        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Alert variant="danger" style={{ width: '40%', textAlign: 'center' }}>DO NOT AUTOCLAVE!</Alert>
        </div>

        <br />
        <Nav prev="Path" next="TypesQ1" />
      </Container>);
  }
}