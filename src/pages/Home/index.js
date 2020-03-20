import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    render() {
        return (
            <Jumbotron fluid>
              <h1>Bloodborne Pathogens (BBP) <br/>
                Exposure Control Plan
              </h1>
              <div>
                <Button variant='primary'>Start</Button>
              </div>
            </Jumbotron>
        );
    }
}

export default Home;