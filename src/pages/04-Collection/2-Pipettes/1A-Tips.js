import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class TipsA extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Biohazard Waste Collection'
        />
        <h1>Contaminated Pipette Tips</h1>
        <br />
        <Row>
          <Col xs={3} md={3} className="text-center my-auto"><Image src="./Collection-Images/2-1A-1.jpg" rounded style={{ width: "70%" }} /></Col>
          <Col xs={6} md={6} className="text-center my-auto">
            Collect in a small autoclave bag lining a wire stand or other container bearing the biohazard symbol.
                    <br /><br />
          </Col>
          <Col xs={3} md={3} className="text-center my-auto"><Image src="./Collection-Images/2-1A-2.jpg" rounded style={{ width: "70%" }} /></Col>
        </Row> 
        <br />
        <Nav prev="Secondary" next="TipsB" />
      </Container>);
  }
}