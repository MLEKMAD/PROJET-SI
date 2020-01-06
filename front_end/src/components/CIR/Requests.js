import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Requests extends Component {
  render() {
    return (
      <Container>
        <Navbar bg='dark' variant="dark">
            <Navbar.Brand>
              <NavItem> <Link to="/">Home</Link></NavItem>
            </Navbar.Brand>
            <Nav  pullRight className='mr-auto'>
              <Nav.Link> <Link to="/ideas">ideas</Link></Nav.Link>
              <Nav.Link> <Link to='/companies'>Companies</Link></Nav.Link>
              <Nav.Link> <Link to="/companies">Login</Link></Nav.Link>
            </Nav>
        </Navbar>
      </Container>
    );
  }
}
export default Requests;
