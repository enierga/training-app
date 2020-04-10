import React, { Component } from 'react';
import { Container, Row, Col, Image, Alert} from 'react-bootstrap';
import Nav from '../../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../../components/header';


export default class Secondary extends Component{
    render() {
        return(
            <Container>
                <Header/>
                <h1>Dry Solids</h1>
                <h3>Secondary Containment</h3>
                <br/>
                <Row>
                    <Col xs={4} md={4} className="text-center my-auto"><Image src="./Collection-Images/1-2.jpg" rounded style={{width:"60%"}}/></Col>
                    <Col xs={8} md={8} className="text-center my-auto">
                    The outer collection container must be red, durable, leak proof, have a lid and be of such a design so as not to be mistaken by Housekeeping as regular trash. 
                    <br/><br/>
                    Must be labeled with a biohazard sticker. 
                    <br/><br/>
                    Maximum size of a biohazard waste container is 15-gallon.
                    <br/><br/>
                    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <Alert variant="secondary" style={{width:'80%'}}>
                            {/* CAN'T RETRIEVE LINKS FROM SLIDE 9  */}
                            You may review the biohazard waste containers available through Fishersci. 
                            However, EHS has located economical alternatives to help ease the cost associated with replacing waste containers.
                        </Alert>
                    </div>
                    </Col>
                </Row>
                <br/>
                <Nav prev="Primary" next="SolidsUnacc" />
            </Container>);
    }
}