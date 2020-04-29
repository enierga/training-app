import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Carc extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Biohazard Waste Disposal'
        />
        <h1>Contaminated Animal Carcasses, Body Parts, and Bedding</h1>
        <br />
        <Row>
          <Col xs={6} md={4} className="text-center my-auto"><Image src="./Disposal-Images/5.png" rounded style={{ width: "80%" }}/></Col>
          <Col xs={12} md={8} className="my-auto" >
            Animal carcasses, body parts, and bedding from animals inoculated with infectious agents are disposed of through the Division of Comparative Medicine (DCM) by incineration.
                    <br /><br />
                    These materials are to be placed in boxes provided by DCM and marked for incineration. (No needles, other type of metal, and no PVC plastic are to be placed in the collection boxes. Use only non-PVC plastic bags.)
                    <br /><br />
                    Carcasses contaminated with radioisotopes or carcinogens are picked up by the Department of Environment, Health and Safety.
                    </Col>
        </Row>
        <br />
        <Nav prev="Droso" next="Injury" />
      </Container>);
  }
}