import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'


export default class ProcessA extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Waste Disposal Overview</h1>
                <br/>
                <Row>
                    <Col className="text-center">When 2/3 full, loosely close the bag and place with other solid biohazard waste.</Col>
                    <Col className="text-center">When the bag is 2/3 full, close it loosely and transfer it to a larger biohazard bag or autoclave separately.</Col>
                    <Col className="text-center">Remove the containers for disposal when they are 2/3 full and place with other solid biohazard waste or in a larger biohazard bag.</Col>
                </Row>
                <br/>
                <Row>
                    <Col className="text-center"><Image src="./Disposal-Images/1A1.jpg" rounded style={{width:"5em"}}/></Col>
                    <Col className="text-center"><Image src="./Disposal-Images/1A2.jpg" rounded style={{width:"9em"}} /></Col>
                    <Col className="text-center"><Image src="./Disposal-Images/1A3.jpg" rounded style={{width:"6em"}} /></Col>
                </Row>
                <br/>
                <Row>
                    <Col className="text-center"><FontAwesomeIcon icon={faLongArrowAltDown} color={"#ea6360"} size="5x" transform="rotate--30"/></Col>
                    <Col className="text-center"><FontAwesomeIcon icon={faLongArrowAltDown} color={"#ea6360"} size="5x"/></Col>
                    <Col className="text-center"><FontAwesomeIcon icon={faLongArrowAltDown} color={"#ea6360"} size="5x" transform="rotate-30"/></Col>
                </Row>
                <br/>
                <Row><Col className="text-center"><Image src="./Disposal-Images/1A4.jpg" rounded style={{width:"20em"}}/></Col></Row>
                <br/>
                <Nav prev="DisposalStart" next="ProcessB" />
            </Container>);
    }
}