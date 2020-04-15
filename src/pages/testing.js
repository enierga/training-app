import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Nav from './../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import MultChoice from "./../components/MultChoice";

export default class testing extends Component {
    render() {
        return (
            <Container>
                <Header />
                <h1>Eggs</h1>
                <p>Click on the correct answer to proceed.</p>
                <MultChoice 
                    prev="" 
                    next="" 
                    index="1"
                    total="2"
                    question="Do you like eggs?"
                    boolA="true"
                    ansA="hell yea"
                    boolB="false"
                    ansB="no"
                    boolC="false"
                    ansC="no"
                    boolD="false"
                    ansD="no"
                    boolE="false"
                    ansE="no"
                    />


                <br />
                {/* <Nav prev="" next="" /> */}
            </Container>);
    }
}