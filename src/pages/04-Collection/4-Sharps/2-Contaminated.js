import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert} from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';


export default class Contam extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Contaminated Broken Glass</h1>
                <br/>
                <Row>
                    <Col xs={5} md={5} className="text-center my-auto">
                        <Image src="./Collection-Images/4-2-1.jpg" rounded style={{width:'10em'}}/>
                        <Image src="./Collection-Images/4-2-2.png" rounded style={{width:'10em'}}/>
                    </Col>
                    <Col xs={6} md={6} className="my-auto">
                        Small shards of contaminated broken glass or Pasteur pipettes should be placed into the red sharps containers.
                        <br/><br/>
                        Large contaminated broken glass items must be autoclaved separately in a hard-walled container such as a cardboard box or commercial broken glass box. Pasteur pipettes can also be placed in this box.
                        <br/><br/>
                        Line the box with an orange autoclave bag bearing an autoclave tape indicator "x" over the bag's biohazard symbol before lining the box                
                    </Col>
                </Row>
                <br/>
                <Nav prev="SharpsGen" next="SharpsUnacc" />
            </Container>);
    }
}