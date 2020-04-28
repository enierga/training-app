import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import MultChoice from "../../components/MultChoice";

export default class TypesQ1 extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Types of Biohazard Waste'
        />
        <h1>Biohazardous Waste</h1>
        <p>Click on the correct answer to proceed.</p>
        <MultChoice
          prev="Mixed"
          next="TypesQ2"
          index="1"
          total="2"
          question="Dry solid biohazardous waste includes the following:"
          boolA="false"
          ansA="Personal protective equipment (PPE)"
          boolB="false"
          ansB="Aspirated liquid waste"
          boolC="false"
          ansC="Petri dishes"
          boolD="true"
          ansD="A and C"
          boolE="false"
          ansE="None of the above"
        />
        <br />
      </Container>);
  }
}