import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

class Start extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <h1>Module Start!</h1>
            </Container>);
    }
}

export default Start;