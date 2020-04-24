import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: true,
      timer: null,
    }
  }

  componentDidMount() {
    /*
    * This is where the delay for each page is set, in milliseconds.
    */
    var time = 5000;

    setTimeout(() => this.setState({ isButtonDisabled: false }), time);

    const timer = setInterval(function () {
      if (document.body.contains(document.getElementById('timeLeft'))) {
        document.querySelector('#timeLeft').textContent = " " + ((time / 1000) - 1) + " ";
      }
      time -= 1000;
      if (time <= 0) {
        document.querySelector('#nextButton').textContent = "NEXT";
        clearInterval(timer);
      }
    }, 1000)

    this.setState({ timer: timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <Link to={`/${this.props.prev}`}>
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>

        <Link to={`/${this.props.next}`}>
          <Button id="nextButton" variant='warning' disabled={this.state.isButtonDisabled} style={{ color: 'white', float: "right" }}>
            <Spinner animation="border" variant="info" size="sm" />
            <span id="timeLeft"> 5 </span>seconds left</Button>
        </Link>
      </div>  
    )
  }
}