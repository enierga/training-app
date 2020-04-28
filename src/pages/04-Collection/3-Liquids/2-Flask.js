import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';

export default class Flask extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Biohazard Waste Collection'
        />
        <h1>Liquid Waste</h1>
        <h3>Proper aspiration vacuum flask set up</h3>
        <br />
        <Row>
          <Col xs={5} md={5} className="text-center my-auto"><Image src="./Collection-Images/3-2.png  " rounded style={{ width: "90%" }}/></Col>
          <Col xs={7} md={7} className="my-auto">
            A - Primary flask (used to collect liquid)<br />
                    B - Secondary flask (overfill flask) minimizes splash<br />
                    C - In line filter between secondary flask and vacuum source<br />
                    D - Vacuum line that is connected to house vacuum or vacuum pump
                    <br /><br />
                    The primary and secondary flasks should contain a 10% bleach solution. The flask solution should be changed at least once a week to insure the killing strength of the bleach solution.
                    <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Alert variant="secondary" style={{ width: '80%' }}>
                NOTE: If using a disinfectant other than a bleach solution, it may not be approved for sink disposal and you should contact the Biosafety Section at EHS (919-962-5507).
                        </Alert>
            </div>
          </Col>
        </Row>
        <br />
        <Nav prev="Primary" next="LiqUnacc" />
      </Container>);
  }
}