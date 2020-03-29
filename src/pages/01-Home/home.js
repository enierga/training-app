import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import well from "./old-well.png";

class Home extends Component {
    render() {
        return (
          <Container>

            <Jumbotron fluid style={{backgroundColor: '#4B9CD3'}}>
              <Row>
                <Col xs="10">
                <h1 class="display-3" style={{color: 'white', paddingLeft:"2%"}}>Biological Waste Disposal</h1>
                <p class="lead" style={{color: 'white', paddingLeft:"2%", fontSize: "2em"}}>EHS Self Study Unit</p>
                </Col>
                <Col><img src={well} alt="Old Well" style={{float: "right", paddingRight:"25%"}}/></Col>
              </Row>
            </Jumbotron> 

            {/*use Link on a button to proceed to next page  */}
            <Link to="/Start">
            <Button variant='warning' block style={{color: 'white'}}>GET STARTED</Button>
            </Link>

          </Container>
        );
    }
}

export default Home;