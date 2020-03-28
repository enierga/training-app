import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Jumbotron fluid>
              <h1>Bloodborne Pathogens (BBP) <br/>
                Exposure Control Plan
              </h1>   
              {/*use Link on a button to proceed to next page  */}
            <Link to="/Start">
            <Button variant='primary'>Start</Button>
            </Link>
            </Jumbotron> 
        );
    }
}

export default Home;