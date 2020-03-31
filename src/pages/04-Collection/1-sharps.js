import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';


export default class Sharps extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <h1>Module Start!</h1>
            </Container>
    );
    }
}

