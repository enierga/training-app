import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import well from "../../components/white-old-well.svg";

export default class Home extends Component {

  /* Super Experimental Audio Implementation */

  // componentDidMount() {
  //   this.audio = new Audio("./Audio/default.mp3");
  //   this.audio.load();
  //   this.playAudio();
  // }

  // playAudio() {
  //   const audioPromise = this.audio.play();
  //   if(audioPromise !== undefined) {
  //     audioPromise.then(_ => {
  //       // autoplay audio
  //     }).catch(err => {
  //       // some error is thrown idk why it would tho
  //       console.log(err);
  //     });
  //   }
  // }

  render() {
    return (
      <Container>

        <Jumbotron fluid style={{ backgroundColor: '#4B9CD3' }}>
          <Row>
            <Col xs="10">
              <h1 class="display-3" style={{ color: 'white', paddingLeft: "2%" }}>Biohazardous Waste Management</h1>
              <h4 style={{ color: 'white', paddingLeft: "2%" }}>for Laboratories at UNC Chapel Hill</h4>
              <p class="lead" style={{ color: 'white', paddingLeft: "2%", fontSize: "2em" }}>EHS Self Study Unit</p>
            </Col>
            <Col><img src={well} alt="Old Well" style={{ float: "right", paddingRight: "10%", width: "10em" }} /></Col>
          </Row>
        </Jumbotron>

        {/*use Link on a button to proceed to next page  */}
        <Link to="/Policy">
          <Button variant='warning' style={{ color: 'white', float: "right" }}>START</Button>
        </Link>

        {/*Temporary link to Disposal section */}
        {/* <Link to="/ProcessA">
          <Button variant='success' style={{ color: 'white' }}>EXAMPLE MODULE</Button>
        </Link><br /><br /> */}

        {/*Link to example question types*/}
        {/* <Link to="/SampMC">
          <Button variant='outline-success'>Multiple-choice</Button>
        </Link><br /><br />
        <Link to="/SortingSampDnD">
          <Button variant='outline-success'>Sorting Drag n Drop</Button>
        </Link><br /><br />
        <Link to="/BucketSampDnD">
          <Button variant='outline-success'>Bucket Drag n Drop</Button>
        </Link><br /><br /> */}

      </Container>
    );
  }
}