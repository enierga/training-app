import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import TrueFalse from "../../components/TrueFalse";

export default class CollectionQ3 extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <h1>Waste Collection</h1>
                <p>Click on the correct answer to proceed.</p>
                <TrueFalse
                prev="CollectionQ2"
                next="CollectionQ4"
                index="3"
                total="5"
                question="The biohazard solid waste container must be red, durable, leak proof, have a lid, and labeled with the biohazard symbol"
                boolA="true"
                ansA="True"
                boolB="false"
                ansB="False"
                />
            </Container>
        )
    }
}