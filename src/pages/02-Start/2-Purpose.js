import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Purpose extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Purpose</h1>
                <p>
                    This training is meant to familiarize generators of biohazardous waste with information regarding: 
                </p>
                <ListGroup style={{width:'80%', margin:'0 auto'}}>
                    <ListGroup.Item>Types of biohazardous waste</ListGroup.Item>
                    <ListGroup.Item>Collection methods</ListGroup.Item>
                    <ListGroup.Item>Disposal methods</ListGroup.Item>
                    <ListGroup.Item>[Downstream exposure risks??]</ListGroup.Item>
                </ListGroup>
                <br/>
                <Nav prev="Policy" next="Solids" />
            </Container>);
    }
}