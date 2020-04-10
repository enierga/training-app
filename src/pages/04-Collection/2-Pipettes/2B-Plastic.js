import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert} from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';


export default class PlasticB extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Unacceptable Pipette Disposal</h1>
                <br/>
                <Row>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/2-2B-1.png" rounded style={{width:"12em"}}/></Col>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/2-2B-2.jpg" rounded style={{width:"13em"}}/></Col>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/2-2B-3.jpg" rounded style={{width:"16em"}}/></Col>
                </Row>
                <br/>
                <Row>
                    <Col className="text-center">Taping a biohazard bag to the side of a fridge</Col>
                    <Col className="text-center">Stacking vertically</Col>
                    <Col className="text-center">Tossed into the box</Col>
                </Row>
                <br/>
                <Nav prev="PlasticA" next="LiqGen" />
            </Container>);
    }
}