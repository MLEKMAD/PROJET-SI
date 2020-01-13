import React, { Component } from 'react';
import { Form, Container, InputGroup, Button } from 'react-bootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export class SignUp extends Component {
  render() {
    return (
      <Container>
        
        <h1>Sign Up</h1>
        <Form noValidate>
          <Form.Group>
            <Form.Label>email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  @
                </InputGroup.Text>
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
            <Form.Group controlId="validationFormikEmail">
              <Form.Label>First Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  aria-describedby="inputGroupPrepend"
                  name="First_Name"
                />
              </InputGroup>
            </Form.Group>
            <Form.Label>Last Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Last Name"
                aria-describedby="inputGroupPrepend"
                name="Last_Name"
              />
            </InputGroup>
          </Form.Group>
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              aria-describedby="inputGroupPrepend"
              name="password"
            />
          </InputGroup>
          <FormControl >
        <InputLabel >Type</InputLabel>
        <Select
         
        >
        <MenuItem value={""}/>
          <MenuItem value={1}>Research_Team</MenuItem>
          <MenuItem value={2}>GU</MenuItem>
          <MenuItem value={3}>CIR</MenuItem>
        </Select>
      </FormControl>
          <br />
          <br/>
          <Button type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}
export default SignUp;
