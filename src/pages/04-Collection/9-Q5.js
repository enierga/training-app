import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import TrueFalse from "../../components/TrueFalse";

export default class CollectionQ5 extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Biohazard Waste Collection'
        />
        <h1>Waste Collection</h1>
        <p>Click on the correct answer to proceed.</p>
        <TrueFalse
          prev="CollectionQ4"
          next="ProcessA"
          index="5"
          total="5"
          question="Styrofoam containers and cardboard boxes can be used as secondary containers for liquid biohazard waste"
          boolA="false"
          ansA="True"
          boolB="true"
          ansB="False"
        />
      </Container>
    )
  }
}