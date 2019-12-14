import React, { Component } from 'react';
import { NavItem, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class CIRNavbar extends Component {
  render() {
    return (
      <Container>
        
        <Navbar bg='dark' variant="dark">
            <Navbar.Brand>
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link ><Link to='/requests'>Requests</Link></Nav.Link>
              <Nav.Link> <Link to="/states">States</Link></Nav.Link>
              <Nav.Link> <Link to="/">Logout</Link></Nav.Link>
            </Nav>
          
        </Navbar>
      </Container>
    );
  }
}
export default CIRNavbar;
