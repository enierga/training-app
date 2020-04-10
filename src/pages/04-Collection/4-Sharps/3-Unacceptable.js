import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';


export default class SharpsUnacc extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Unacceptable Sharps Disposal</h1>
                <br/>
                <Row>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/4-3-1.png" rounded style={{width:"12em"}}/></Col>
                    <Col className="text-center my-auto"><Image src="./Collection-Images/4-3-2.png" rounded style={{width:"12em"}}/></Col>
                </Row>
                <br/>
                <Row>
                    <Col className="text-center">Metal sharps container</Col>
                    <Col className="text-center">Over flowing sharps container</Col>
                </Row>
                <br/>
                <Nav prev="Contam" next="ProcessA" />
            </Container>);
    }
}