import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Path extends Component {
  render() {
    return (
      <Container>
        <Header 
        header = 'Types of Biohazard Waste'
        />
        <h1>Pathological</h1>
        <p>
          Animal or human organs, tissues, and body parts. Any
          of these may contain infectious agents. Waste materials from a
          biopsy procedure fall into this category.
                </p>
        <Row>
          <Col className="text-center my-auto">
            <Image src="./Types-Images/path-mouse.jpg" rounded style={{ width: '15em', marginRight: "1em" }} />
            <Image src="./Types-Images/path-organ.jpg" rounded style={{ width: '15em' }} />
          </Col>
        </Row>

        <br />
        <Nav prev="Sharps" next="Mixed" />
      </Container>);
  }
}