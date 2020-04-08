import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';


export default class AutocB extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Autoclaving: Liquid Waste</h1>
                <br/>
                <Row>
                    <Col xs={6} md={4} className="text-center my-auto"><Image src="./Disposal-Images/3B1.jpg" rounded/></Col>
                    <Col xs={12} md={8} className="text-center my-auto">Autoclaving is the method of choice for disinfection. Autoclaved liquid wastes may be discharged directly to the sanitary sewer.</Col>
                </Row>
                <br/>
                <Row>
                <Col xs={12} md={8} className="text-center my-auto">
                    <b>Chemical disinfection</b> may be an acceptable alternative to autoclaving liquid biohazard waste generated in research laboratories at UNC-CH such as bleach treatment. Some regulated liquids require approval from the NC Division of Waste Management prior to disinfection and disposal.
                </Col>
                <Col xs={6} md={4} className="text-center my-auto"><Image src="./Disposal-Images/3B2.jpg" rounded style={{width:"6em"}}/></Col>
                </Row>
                <br/>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <Card style={{ width: '40%'}} bg="danger" text="light">
                        <Card.Body>
                            Visit EHS’s <a href="https://ehs.unc.edu/biological/microbio/">Chemical Treatment of Liquid Microbiological Waste webpage</a> to evaluate if chemical treatment of your liquid biohazard waste requires approval.
                        </Card.Body>
                    </Card>
                </div>
                <br/>
                <Nav prev="AutocA" next="SampMC" />
            </Container>);
    }
}