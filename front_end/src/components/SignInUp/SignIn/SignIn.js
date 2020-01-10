import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../../assets/scss/style.scss';
import Breadcrumb from "./Breadcrumb";
import './Logo.css';

<<<<<<< Updated upstream
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
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              type="text"
              aria-describedby="inputGroupPrepend"
            ></Form.Control>
          </Form.Group>
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }
=======
class SignIn extends React.Component {
    render () {
        return(

            <div>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                        <div className="Logo mb-4">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <br></br>
                            </div>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Login</button>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/signUp">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/signUp">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
        );
    }
>>>>>>> Stashed changes
}

export default SignIn;