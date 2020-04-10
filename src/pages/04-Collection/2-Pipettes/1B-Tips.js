import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';


export default class TipsB extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Unacceptable Pipette Tips Disposal</h1>
                <br/>
                <Row>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/2-1B-1.jpg" rounded style={{width:"13em"}}/></Col>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/2-1B-2.jpg" rounded style={{width:"12em"}}/></Col>
                </Row>
                <br/>
                <Row>
                    <Col className="text-center">No biohazard label or biohazard bag liner for contaminated tips.</Col>
                    <Col className="text-center">Use of food containers.</Col>
                </Row>
                <br/>
                <Nav prev="TipsA" next="PlasticA" />
            </Container>);
    }
}