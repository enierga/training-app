import React, { Component} from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';


export default class Definition extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <h1>Defining Laboratory-Generated Biohazard Waste</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to="/Start">
                    <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
                </Link>
                <Link to="/DefAssess">
                    <Button variant='warning' style={{color: 'white', float: "right"}}>NEXT</Button>
                </Link>
            </Container>
        );
    }
}

