import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Liquids extends Component {
    render() {
        return (
            <Container>
                <Header />
                <h1>Liquids</h1>
                <p>
                    -pourable wastes
                </p>
                <ListGroup style={{ width: '80%', margin: '0 auto' }}>
                    <ListGroup.Item>Body fluids, blood, or blood products</ListGroup.Item>
                    <ListGroup.Item>Cell culture media and stocks</ListGroup.Item>
                    <ListGroup.Item>Microbiological media and stocks</ListGroup.Item>
                    <ListGroup.Item>Aspirated liquid waste</ListGroup.Item>
                </ListGroup>
                <Row>
                    <Col>
                        <Image src="./Types-Images/liquids-stocks.jpg" rounded />
                    </Col>
                    <Col>
                        <Image src="./Types-Images/liquids-blood.jpg" rounded />
                    </Col>
                </Row>

                <br />
                <Nav prev="Solids" next="Sharps" />
            </Container>);
    }
}