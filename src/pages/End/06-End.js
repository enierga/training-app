import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import well from "../../components/white-old-well.svg";


export default class End extends Component {
  render() {
    return (
      <Container>

        <Jumbotron fluid style={{ backgroundColor: '#4B9CD3' }}>
          <Row>
            <Col xs="10">
              <h1 class="display-3" style={{ color: 'white', paddingLeft: "2%" }}>Thank you</h1>
              <p class="lead" style={{ color: 'white', paddingLeft: "2%", fontSize: "2em" }}>for completing the Biological Waste Disposal training.</p>
            </Col>
            <Col><img src={well} alt="Old Well" style={{ float: "right", paddingRight: "10%", width: "10em" }} /></Col>
          </Row>
        </Jumbotron>

        {/*Change link*/}
        <a href="https://ehsdev.cloudapps.unc.edu/SelfStudyUnits/?testid=116">
          <Button variant='warning' style={{ color: 'white', float: "right" }}>Click to access the assessment</Button>
        </a>

      </Container>
    );
  }
}