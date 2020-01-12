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
export class Statistics extends Component {
  render() {
    return (
        <Jumbotron>
        <h1>User </h1>
        <p>Contributions</p>
    </Jumbotron>
    );
  }
}
export default Statistics;