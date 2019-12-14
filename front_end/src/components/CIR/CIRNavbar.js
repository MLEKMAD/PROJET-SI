import React, { Component } from 'react';
import { NavItem, Nav, Navbar, Container } from 'react-bootstrap';
export class CIRNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <NavItem href="/home">Home</NavItem>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/requests">Requests</NavItem>
              <NavItem href="/states">States</NavItem>
              <NavItem href="/logout">Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default CIRNavbar;
