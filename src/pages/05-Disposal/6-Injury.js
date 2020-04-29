import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import Nav from '../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Injury extends Component {
  render() {
    return (
      <Container>
        <Header
          header='Biohazard Waste Disposal'
        />
        <h1>Injuries</h1>
        <br />
        <p>Mishandling of biological waste can lead to exposures or injury incidents to researchers, facilities personnel, housekeepers,
        and other that may come into contact with the weate. Environmental Health and Safety conducts incident investigations and responds
        to biological safety reports across campus every year to address these issues.
            </p>
        <Row>
          <Col className="text-center my-auto" >
            <Image src="./Disposal-Images/6-1.jpg" rounded style={{ width: "15em" }} />
            <br /><br />
                        From glass pipette
                    </Col>
          <Col className="text-center my-auto">
            <Image src="./Disposal-Images/6-2.png" rounded style={{ width: "15em" }} />
            <br /><br />
                        Needle in trash bag
                    </Col>
        </Row>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Alert variant="danger" style={{ width: '50%', textAlign: 'center' }}>PLEASE BE SAFE AND RESPONSIBLE!</Alert>
        </div>

        <br />
        <Nav prev="Carc" next="SortingSampDND" />
      </Container>);
  }
}