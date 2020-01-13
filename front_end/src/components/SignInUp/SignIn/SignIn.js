import React, { Component } from 'react';
import {
  Form,
  Container,
  InputGroup,
  Button,
  Dropdown,
} from 'react-bootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export class SignIn extends Component {

  render() {
    return (
      <Container> 
        <h1>Sign In</h1>
        <Form noValidate>
          <Form.Group controlId="validationFormikEmail">
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
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                aria-describedby="inputGroupPrepend"
                name="password"
              />
            </InputGroup>
            <br />
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
          </Form.Group><br/>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }
}
export default SignIn;
