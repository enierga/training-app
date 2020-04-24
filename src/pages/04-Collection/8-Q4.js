import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import TrueFalse from "../../components/TrueFalse";

export default class CollectionQ4 extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Waste Collection</h1>
        <p>Click on the correct answer to proceed.</p>
        <TrueFalse
          prev="CollectionQ3"
          next="CollectionQ5"
          index="4"
          total="5"
          question="Pasteur pipettes can be collected in a broken glass box as long as it is labeled with a biohazard symbol and lined with a biohazard bag"
          boolA="true"
          ansA="True"
          boolB="false"
          ansB="False"
        />
      </Container>
    )
  }
}