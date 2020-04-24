import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import well from "./white-old-well.svg";


export default class Header extends Component {
  render() {
    return (
      <Navbar className="ml-auto" style={{ backgroundColor: '#4B9CD3', color: "white" }}>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <div>
              Biological Waste Disposal
                            <img src={well} alt="Old Well" style={{ width: "1em", marginLeft: ".5em" }} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}