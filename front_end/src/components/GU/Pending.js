import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  FormControl,
  Button,
  Container,
  Jumbotron
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Pending extends Component {
  render() {
    return (
        <Jumbotron>
        <h1>Request </h1>
        <p>Description</p>
        <p>
            <button variant='primary'>
                Details
            </button>
        </p>
        <p>
            <button variant='primary'>
                Send to CIR
            </button>
        </p>
    </Jumbotron>
    );
  }
}
export default Pending;