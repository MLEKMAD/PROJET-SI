import React, { Component } from 'react';
import { Form, Container, InputGroup, Button } from 'react-bootstrap';

export class AddIdea extends Component {
  render() {
    return (
      <Container>
        <h1>Create an Idea</h1>
        <Form noValidate>
          <Form.Group>
            <Form.Label>Idea Name</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  !
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="place here your brilliant idea's name "
                aria-describedby="inputGroupPrepend"
                name="idea"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <InputGroup>
              <Form.Control
                as="textarea"
                rows="3"
                type="text"
                placeholder="Describe your Idea"
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
export default AddIdea;
