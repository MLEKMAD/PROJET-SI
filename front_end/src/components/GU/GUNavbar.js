import React,{Component} from 'react';
import {Nav,Navbar,Form,FormControl,Button,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class GUNavbar extends Component{
    
    render(){
        return(
          <Container>
        
          <Navbar bg='dark' variant="dark">
              <Navbar.Brand>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link> <Link to="/pending">Pending </Link></Nav.Link>
                <Nav.Link> <Link to="/statistics">Statistics</Link></Nav.Link>

                <Nav.Link> <Link to="/">Logout</Link></Nav.Link>
              </Nav>
            
          </Navbar>
        </Container>

        )}
}
export default GUNavbar;