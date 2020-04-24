import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import Nav from './../../components/nav';


export default class SampMC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correctClicked: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    let id = e.target.id
    if (id === "true") {
      this.setState({ correctClicked: true })
    } else {
      alert('Not quite, try again!')
    }
  }
  render() {

    return this.state.correctClicked ? (<Container>
      <Header />
      <h1>Sample Multiple Choice Question</h1>
      <p>
        This page is a sample of what a multiple choice would look like. The correct answer is currently the first choice. Choosing the correct answer should show the next button, otherwise it should not appear.
            </p>
      <Button id='true' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
      <Button id='false' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
      <Button id='false' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
      <Button id='false' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
      <br /><br /><br />
      <Link to="/Def">
        <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
      </Link>
      {/*Correct the link and add route*/}
      <Link to="/SampDnD">
        <Button variant='warning' style={{ color: 'white', float: "right" }}>NEXT</Button>
      </Link>
    </Container>) : (
        <Container>
          <Header />
          <h1>Sample Multiple Choice Question</h1>
          <p>
            This page is a sample of what a multiple choice would look like. The correct answer is currently the first choice. Choosing the correct answer should show the next button, otherwise it should not appear.
                </p>
          <Button id='true' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
          <Button id='false' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
          <Button id='false' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
          <Button id='false' style={{ backgroundColor: '#4B9CD3' }} onClick={this.clickHandler}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Button><br /><br />
          <br /><br /><br />

          <Nav prev="" next="SortingSampDnD" />
          {/*Correct the link and add route*/}
        </Container>);
  }
}

