import React, { Component } from 'react';
import { Container, ListGroup, Jumbotron, Button } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class DisposalStart extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1 style={{}}>Waste Disposal</h1>
                <br/>
                <Nav prev="" next="ProcessA" />
            </Container>);
    }
}