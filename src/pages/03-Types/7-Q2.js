import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import MultChoice from "../../components/MultChoice";

export default class TypesQ2 extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Biohazardous Waste</h1>
        <p>Click on the correct answer to proceed.</p>
        <MultChoice
          prev="TypesQ1"
          next="Primary"
          index="2"
          total="2"
          question="The following contaminated items should go into the biohazardous sharps container"
          boolA="false"
          ansA="Needles"
          boolB="false"
          ansB="Razor blades"
          boolC="false"
          ansC="Scalpel"
          boolD="true"
          ansD="All of the above"
          boolE="false"
          ansE="None of the above"
        />
        <br />
      </Container>);
  }
}