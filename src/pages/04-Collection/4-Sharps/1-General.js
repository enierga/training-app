import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class SharpsGen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Biohazardous Sharps</h1>
        <br />
        <Row>
          <Col xs={4} md={4} className="text-center my-auto"><Image src="./Collection-Images/4-1.jpg" rounded /></Col>
          <Col xs={8} md={8} className="my-auto">
            <ul>
              <li>collected directly into red, plastic containers</li>
              <li>containers must bear the biohazard symbol</li>
              <li>marked with an "x" using autoclave indicator tape over biohazard symbol</li>
            </ul>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Alert variant="secondary" style={{ width: '80%' }}>
                Note: Glass vials of blood with less than 20ml are allowed. Deface patient information prior to placing in sharps container.
                            </Alert>
            </div>
          </Col>
        </Row>
        <br />
        <Nav prev="LiqUnacc" next="Contam" />
      </Container>);
  }
}