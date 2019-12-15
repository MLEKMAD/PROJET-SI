import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

import {
  Nav,
  Navbar,
  NavItem,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class GUHome extends Component {
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
        <p>State</p>

    </Jumbotron>
    );
  }
}
export default GUHome;
