import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisabled: true,
        }
    }

    componentDidMount() {
        /*
        * I only set this timeout to be 5 seconds here but copy this structure 
        * and we can figure out how long to make the wait for each page later
        */
        var time = 5000;
        setTimeout(() => this.setState({ isButtonDisabled: false }), time + 1000);

        const timer = setInterval(function () {
            document.querySelector('#timeLeft').textContent = " " + (time / 1000) + " ";
            if (time <= 0) {
                document.querySelector('#nextButton').textContent = "NEXT";
                clearInterval(timer);
            }
            time -= 1000;
        }, 1000)
    }



    render() {
        return (
            <div>
                <Link to={`/${this.props.prev}`}>
                    <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
                </Link>

                <Link to={`/${this.props.next}`}>
                    <Button id="nextButton" variant='warning' disabled={this.state.isButtonDisabled} style={{ color: 'white', float: "right" }}>
                        <Spinner animation="border" variant="info" size="sm"/> 
                        <span id="timeLeft"></span> 
                         seconds left
                         </Button>
                </Link>
            </div>
        )
    }
}