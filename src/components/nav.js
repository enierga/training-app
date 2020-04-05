import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
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
        * I only set this timeout to be seconds here but copy this structure 
        * and we can figure out how long to make the wait for each page later
        */
        setTimeout(() => this.setState({ isButtonDisabled: false}), 5000);
    }
    
    render () {
        return (
            <div>
                <Link to={`/${this.props.prev}`}>
                    <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
                </Link>
                <Link to={`/${this.props.next}`}>
                    <Button variant='warning' disabled={this.state.isButtonDisabled} style={{color: 'white', float: "right"}}>NEXT</Button>
                </Link>
            </div>
        )
    }
}