import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import TrueFalse from "../../components/TrueFalse";

export default class CollectionQ2 extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <h1>Waste Collection</h1>
                <p>Choose true or false fool</p>
                <TrueFalse
                prev="CollectionQ1"
                next="CollectionQ3"
                index="2"
                total="5"
                question="Cardboard boxes are a good substitute for using as solid biohazard waste containers as long as they are lined with a biohazard bag"
                boolA="false"
                ansA="True"
                boolB="true"
                ansB="False"
                />
            </Container>
        )
    }
}