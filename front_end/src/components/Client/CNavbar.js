import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

export class CNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav pullRight className="mr-auto">
            <Nav.Link href="/orders">My Orders</Nav.Link>
            <Nav.Link href="/addIdea">add an Idea</Nav.Link>
            <Nav.Link href="/AddCompany">Create a Company</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default CNavbar;
