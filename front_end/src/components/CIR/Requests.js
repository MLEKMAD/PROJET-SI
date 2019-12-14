import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

export class Requests extends Component {
  render() {
    return (
      <Container>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <NavItem href="/">Home</NavItem>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/ideas">ideas</NavItem>
              <NavItem href='/companies'>Companies</NavItem>
              <NavItem href="/companies">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default Requests;
