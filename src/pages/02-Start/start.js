import React, { Component } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';

export default class Start extends Component{
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
                    <ListGroup.Item>lab workers generating and collecting biohazard waste during research</ListGroup.Item>
                    <ListGroup.Item>support staff retrieving, transferring, and autoclaving the biohazard waste</ListGroup.Item>
                    <ListGroup.Item>housekeeping staff responsible for transporting autoclaved waste in buildings that house UNC-CH research laboratories</ListGroup.Item>
                    <ListGroup.Item>facilities staff (plumbers, electricians, HVAC, welders, etc.), emergency personnel, and visitors who visit the lab infrequently</ListGroup.Item>
                    <ListGroup.Item>and employees responsible for hauling away waste that is generated in UNC-CH research laboratories</ListGroup.Item>
                </ListGroup>
                <p>
                    <br/>
                    North Carolina medical waste rules (15A NCAC 13 B .1200), require that "Regulated Medical Waste", defined as "blood and body fluids in individual containers greater than 20 ml, microbiological waste, and pathological waste," must be treated before disposal in order to render the waste nonhazardous. Most UNC-CH campus laboratory-generated biohazard waste, as defined below, falls under the State defined category of "microbiological waste" within 15A NCAC 13 B .1200. Biohazard waste generated and collected in UNC-CH research laboratories is to be properly autoclaved according to procedures outlined below. This process changes the biological characteristics of the waste thereby reducing or eliminating its potential to cause disease. Laboratories with biohazard waste not specifically addressed by this document (such as waste with multiple hazards, e.g. radioactive biohazardous waste) should consult with Environment, Health and Safety for alternative treatment and disposal methods.
                </p>
                <p>The procedures of this policy are consistent with applicable sections of the OSHA Bloodborne Pathogens Standard 29 CFR 1910.1030.
                </p>

                <Link to="/Def">
                    <Button variant='warning' disabled={this.state.isButtonDisabled} style={{color: 'white', float: "right"}}>NEXT</Button>
                </Link>
            </Container>);
    }
}