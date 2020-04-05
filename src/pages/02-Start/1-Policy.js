import React, { Component } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Policy extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisabled: true,
        }
    }

    componentDidMount() {
        /*
        * I only set this timeout to be seconds here but copy this structure 
        * and we can figure out how long to make the wait for each page later
        */
        setTimeout(() => this.setState({ isButtonDisabled: false}), 5000);
    }

    render() {
        return(
            <Container>
                <Header/>
                <h1>Introduction</h1>
                <p>
                    The UNC-CH Biological Waste Disposal Policy stipulates proper procedures for the collection, decontamination, and disposal of laboratory-generated biohazard waste. This policy has been developed in order to minimize the risk of exposure to those who may come into contact with biohazard waste generated in a UNC-CH research laboratory, specifically:
                </p>
                <ListGroup style={{width:'80%', margin:'0 auto'}}>
                    <ListGroup.Item>Lab workers generating and collecting biohazard waste during research</ListGroup.Item>
                    <ListGroup.Item>Support staff retrieving, transferring, and autoclaving the biohazard waste</ListGroup.Item>
                    <ListGroup.Item>Housekeeping staff responsible for transporting autoclaved waste in buildings that house UNC-CH research laboratories</ListGroup.Item>
                    <ListGroup.Item>Facilities staff (plumbers, electricians, HVAC, welders, etc.), emergency personnel, and visitors who visit the lab infrequently</ListGroup.Item>
                </ListGroup>

                <Link to="/Purpose">
                    <Button variant='warning' disabled={this.state.isButtonDisabled} style={{color: 'white', float: "right"}}>
                        NEXT
                    </Button>
                </Link>
            </Container>);
    }
}