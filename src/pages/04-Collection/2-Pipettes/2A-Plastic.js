import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class PlasticA extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Plastic Pipettes</h1>
        <br />
        <Row>
          <Col xs={4} md={4} className="text-center my-auto"><Image src="./Collection-Images/2-2A.jpg" rounded style={{ width: "80%" }} /></Col>
          <Col xs={8} md={8} className="text-center my-auto">
            Place the used pipettes (tips down) in a container filled with an effective disinfectant inside of the biosafety cabinet or on the benchtop. The pipettes should be allowed to remain in the disinfectant for the recommended contact time to ensure decontamination.
                        <br /><br />
                        Line a small orange autoclave bag inside a hard-walled collection container (can use original pipette box) outside the biosafety cabinet or under the benchtop. Stack the decontaminated pipettes inside the box.
                    </Col>
        </Row>
        <br />
        <Nav prev="TipsB" next="PlasticB" />
      </Container>);
  }
}