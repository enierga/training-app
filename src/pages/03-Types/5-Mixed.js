import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Mixed extends Component {
    render() {
        return (
            <Container>
                <Header />
                <h1>Mixed Waste</h1>
                <p>
                    Biological waste contaminated with hazardous chemicals, radioactive substances, or carcinogens require special disposal by EHS. 
                </p>
                <Row>
                    <Col className="text-center my-auto">
                        <Image src="./Types-Images/mixed1.jpg" rounded style={{width:'8em', marginRight:"1em"}}/>
                        <Image src="./Types-Images/mixed2.jpg" rounded style={{width:'8em', marginRight:"1em"}}/>
                        <Image src="./Types-Images/mixed3.jpg" rounded style={{width:'8em', marginRight:"1em"}}/>
                        <Image src="./Types-Images/mixed4.jpg" rounded style={{width:'8em', marginRight:"1em"}}/>
                        <Image src="./Types-Images/mixed5.jpg" rounded style={{width:'8em'}}/>
                    </Col>
                </Row>

                <br />
                <Nav prev="Path" next="TypesQ1" />
            </Container>);
    }
}