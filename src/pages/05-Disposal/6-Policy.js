import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';


export default class DPolicy extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Biohazardous Waste</h1>
                <br/>
                <Row>
                    <Col className="text-center my-auto">
                    Refer to the Biological Waste Disposal Policy in <a href="https://unc.policystat.com/policy/5855711/latest/#autoid-b8364">Chapter 10 of the Biosafety Manual</a>.    
                    </Col>
                </Row>
                <br/>
                <Nav prev="Carc" next="Injury" />
            </Container>);
    }
}