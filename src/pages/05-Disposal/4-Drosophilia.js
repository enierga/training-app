import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Droso extends Component {
  render() {
    return (
      <Container>
        <Header
          header='Biohazard Waste Disposal'
        />
        <h1>Drosophilia</h1>
        <br />
        <Row>
          <Col xs={3} md={3} className="text-center my-auto"><Image src="./Disposal-Images/4-1.jpg" rounded style={{ width: "80%" }} /></Col>
          <Col xs={6} md={6} className="text-center my-auto">
            An alternative to autoclaving Drosophila is dumping anesthetized flies directly into a container with a small amount of mineral oil or a bottle containing either ethanol or isopropanol. If you do not plan to re-use the material, these bottles must be labeled as ethanol, isopropanol or mineral oil waste to be picked up by EHS. If you are going to reuse the material you are dumping the Drosophila into, then you will label the bottle recycled ethanol, isopropanol etc.
                    <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card bg="secondary" text="light">
                <Card.Body>
                  These bottles of chemicals cannot be poured down the sink or sanitary sewer. They must be discarded using the <a href="https://ehs.cloudapps.unc.edu/HazMat_Pickup/" style={{ color: "lightblue" }}>online hazardous waste pick up program</a> through EHS.
                        </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={3} md={3} className="text-center my-auto"><Image src="./Disposal-Images/4-2.jpg" rounded style={{ width: "80%" }} /></Col>
        </Row>
        <br />
        <Nav prev="AutocA" next="Carc" />
      </Container>);
  }
}