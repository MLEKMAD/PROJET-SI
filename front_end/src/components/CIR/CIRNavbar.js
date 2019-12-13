import React,{Component} from 'react';
import {Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import { CIRHome } from "./CIRHome";
export class CIRNavbar extends Component{
 
    
    render(){
        return(
            <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/requests">Requests</Nav.Link>
      <Nav.Link href="/states">States</Nav.Link>
    </Nav>
    <Route path="/home" Component={CIRHome}/>
    <Route path='/Requests/ideas' Component={ideas}/>
    <Route path='/Requests/companies' Component={companies}/>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
 
</div>
        )}
}
export default CIRNavbar;