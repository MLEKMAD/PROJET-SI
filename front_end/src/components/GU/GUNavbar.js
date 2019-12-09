import React,{Component} from 'react';
import {Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';

export class GUNavbar extends Component{
    
    render(){
        return(
            <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#orders">Responses</Nav.Link>
      <Nav.Link href="#idea">Ideas</Nav.Link>
      <Nav.Link href="#compagny">Compagnies</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
 
</div>
        )}
}
export default GUNavbar;