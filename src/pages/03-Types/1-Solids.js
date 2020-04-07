import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Solids extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Dry Solids</h1>
                <p>
                    -any non-sharp material that is contaminated with human or animal specimens, or pathogenic microorgramisms
                </p>
                <ListGroup style={{width:'80%', margin:'0 auto'}}>
                    <ListGroup.Item>Personal protective equipment (PPE)</ListGroup.Item>
                    <ListGroup.Item>Petri dishes</ListGroup.Item>
                    <ListGroup.Item>Cell culture flasks</ListGroup.Item>
                    <ListGroup.Item>Conical tubes</ListGroup.Item>
                    <ListGroup.Item>Plastic pipettes and tips</ListGroup.Item>
                </ListGroup>
                <Row>
                    <Col>
                        <Image src="./Types-Images/solids-conicaltubes.jpg" rounded/>
                    </Col>
                    <Col>
                        <Image src="./Types-Images/solids-petridish.jpg" rounded/>
                    </Col>
                    <Col>
                        <Image src="./Types-Images/solids-ppe.jpg" rounded />
                    </Col>
                </Row>
                <br/>
                <Nav prev="Purpose" next="Liquids" />
            </Container>);
    }
}