import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Path extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Pathological</h1>
                <p>
                    Text                
                </p>
                <ListGroup style={{width:'80%', margin:'0 auto'}}>
                    <ListGroup.Item>A</ListGroup.Item>
                    <ListGroup.Item>B</ListGroup.Item>
                    <ListGroup.Item>C</ListGroup.Item>
                </ListGroup>
                <br/>
                <Nav prev="Sharps" next="Path" />
            </Container>);
    }
}