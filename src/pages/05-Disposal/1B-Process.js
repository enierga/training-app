import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default class ProcessA extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Waste Disposal Overview</h1>
        <br />
        <Row>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B1.jpg" rounded style={{ width: "80%"}} />
          </Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B2.jpg" rounded style={{ width: "80%" }} />
          </Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B3.jpg" rounded style={{ width: "80%" }} />
          </Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B4.png" rounded style={{ width: "80%" }} /></Col>
        </Row>
        <Row>
          <Col className="text-center my-auto">
          <FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="2x"/></Col>
          <Col className="text-center my-auto">
          <FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="2x" /></Col>
          <Col className="text-center my-auto">
          <FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="2x" /></Col>
          <Col className="text-center my-auto"></Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">Remove bags when they are 2/3 full.</Col>
          <Col className="text-center">Loosely close the bags to allow for steam penetration. Place in leakproof secondary container before and during autoclave.</Col>
          <Col className="text-center">Remove bags from the autoclave and place in large leakproof containers (provided by department).</Col>
          <Col className="text-center">Housekeeping personnel take autoclave biohazard waste to dumpster in large black garbage bags.</Col>
        </Row>
        {/* <Row>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B1.jpg" rounded style={{ width: "80%" }} /></Col>
          <Col className="text-center my-auto"><FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="2x" /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B2.jpg" rounded style={{ width: "80%" }} /></Col>
          <Col className="text-center my-auto"><FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="2x" /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B3.jpg" rounded style={{ width: "80%" }} /></Col>
          <Col className="text-center my-auto"><FontAwesomeIcon icon={faLongArrowAltRight} color={"#ea6360"} size="2x" /></Col>
          <Col className="text-center my-auto"><Image src="./Disposal-Images/1B4.png" rounded style={{ width: "80%" }} /></Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">Remove bags when they are 2/3 full.</Col>
          <Col className="text-center my-auto"></Col>
          <Col className="text-center">Loosely close the bags to allow for steam penetration. Place in leakproof secondary container before and during autoclave.</Col>
          <Col className="text-center my-auto"></Col>
          <Col className="text-center">Remove bags from the autoclave and place in large leakproof containers (provided by department).</Col>
          <Col className="text-center my-auto"></Col>
          <Col className="text-center">Housekeeping personnel take autoclave biohazard waste to dumpster in large black garbage bags.</Col>
        </Row> */}
        <br />
        <Nav prev="ProcessA" next="DisUnacc" />
      </Container>);
  }
}