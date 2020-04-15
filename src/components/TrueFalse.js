import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './../components/nav';
import { Container, Button, Badge, Card, Tooltip, Overlay } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// props needed for each MC question:
//
// - prev
// - next
// - index (of current question)
// - total (total number of questions in this section)
// - question
// - ansA, ansB, ansC, ansD, ansE
// - boolA, boolB, boolC, boolD, boolE (to mark the correct answer)

export default class TrueFalse extends Component {
    constructor(props){
        super(props)
        this.state = {
            correctClicked: false,
            target: null,
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e){
        let id = e.target.id
        if (id == "true"){
            this.setState({correctClicked: true})
        } else{
            this.setState({target: e.target})
        }
    }

    render(){
        return this.state.correctClicked ? (            
            <Container>
                <Card>
                    <Card.Header>Question {this.props.index} of {this.props.total}</Card.Header>
                    <Card.Body>
                        <h3>{this.props.question}</h3><br/>
                        <Button id={this.props.boolA} style={{width: '100%', 'text-align':'left'}} variant={this.props.boolA == "true" ? "success" : "secondary"} onClick={this.clickHandler}><Badge pill variant="light">A</Badge> {this.props.ansA}</Button><br/><br/>
                        <Button id={this.props.boolB} style={{width: '100%', 'text-align':'left'}} variant={this.props.boolB == "true" ? "success" : "light"} onClick={this.clickHandler}><Badge pill variant="dark">B</Badge> {this.props.ansB}</Button><br/><br/>
                    </Card.Body>
                </Card> <br/><br/>
                <div>
                <Link to={`/${this.props.prev}`}>
                    <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
                </Link>
                <Link to={`/${this.props.next}`}>
                    <Button variant='warning' style={{color: 'white', float: "right"}}>NEXT</Button>
                </Link>
                </div>
            </Container>
            ) : (            
            <Container>
                <Card>
                    <Card.Header>Question {this.props.index} of {this.props.total}</Card.Header>
                    <Card.Body>
                        <h3>{this.props.question}</h3><br/>
                        <Overlay target={this.state.target} show={true} placement="right">
                            {(props) => (
                                <Tooltip {...props}>Incorrect!</Tooltip>
                           )}
                        </Overlay>
                        <Button id={this.props.boolA} style={{width: '100%', 'text-align':'left', backgroundColor:'#8dc5eb', borderColor:'#8dc5eb'}} onClick={this.clickHandler}><Badge pill variant="light">A</Badge> {this.props.ansA}</Button><br/><br/>
                        <Button id={this.props.boolB} style={{width: '100%', 'text-align':'left', backgroundColor:'#8dc5eb', borderColor:'#8dc5eb'}} onClick={this.clickHandler}><Badge pill variant="light">B</Badge> {this.props.ansB}</Button><br/><br/>
                    </Card.Body>
                </Card> <br/><br/>
                <Link to={`/${this.props.prev}`}>
                    <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
                </Link> 
            </Container>);
    }
}