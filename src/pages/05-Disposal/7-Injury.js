import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Injury extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Injuries</h1>
        <br />
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
        <Nav prev="DPolicy" next="SortingSampDND" />
      </Container>);
  }
}