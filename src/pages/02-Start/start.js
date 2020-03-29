import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Start extends Component{
    render(){
        return(
            <Container>
                {/*Add blue banner at the top w/ training name and UNC logo --> Use this banner on all other pages*/}
                <h1>Module Start!</h1>
            </Container>);
    }
}

export default Start;