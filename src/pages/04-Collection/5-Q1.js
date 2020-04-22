import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import TrueFalse from "../../components/TrueFalse";

export default class CollectionQ1 extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <h1>Waste Collection</h1>
                <p>Click on the correct answer to proceed.</p>
                <TrueFalse
                prev="SharpsUnacc"
                next="CollectionQ2"
                index="1"
                total="5"
                question="It is okay to place razor blades in the solid biohazard waste container as long as they are wrapped in a paper towel"
                boolA="false"
                ansA="True"
                boolB="true"
                ansB="False"
                />
            </Container>
        )
    }
}