import React,{Component} from "react";
import {Form,Container,InputGroup,Button} from "react-bootstrap";

export class SignIn extends Component {
 
  render() {
      return (
         
                      <Container >
                          <h1>Sign In</h1>
                          <Form noValidate >
                              <Form.Group controlId="validationFormikEmail">
                                  <Form.Label>email</Form.Label>
                                  <InputGroup>
                                      <InputGroup.Prepend>
                                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                      </InputGroup.Prepend>
                                      <Form.Control
                                          type="text"
                                          placeholder="user@company.com"
                                          aria-describedby="inputGroupPrepend"
                                          name="email"
                                      />
                                  </InputGroup>
                              </Form.Group>
                              <Form.Group controlId="validationFormikPassword">
                                  <Form.Label>Password</Form.Label>
                                  <InputGroup>
                                      <Form.Control
                                          type="password"
                                          aria-describedby="inputGroupPrepend"
                                          name="password"
                                      />
                                      
                                  </InputGroup>
                              </Form.Group>
                              <Button type="submit">Login</Button>
                          </Form>
                      </Container>
                  


          
      )
  }
}
export default SignIn;