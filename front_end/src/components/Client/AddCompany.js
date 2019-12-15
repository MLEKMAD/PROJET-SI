import React, { Component } from 'react';
import { Form, Container, InputGroup, Button } from 'react-bootstrap';

export class AddCompany extends Component {
  render() {
    return (
      <Container>
        <h1>Create a company</h1>
        <Form noValidate>
          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Put in your new company's name "
                aria-describedby="inputGroupPrepend"
                name="companyName"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>CEO's name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Input the CEO's name"
                aria-describedby="inputGroupPrepend"
                name="companyName"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Buisness plan </Form.Label>
            <InputGroup>
              <Form.Control
                as="textarea"
                rows="3"
                type="text"
                placeholder="Put in a detailed buisness plan for your future enterprise"
                aria-describedby="inputGroupPrepend"
                name="Description"
              />
            </InputGroup>
          </Form.Group>

          <br />

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
export default AddCompany;
