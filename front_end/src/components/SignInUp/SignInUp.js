import React, { Component } from 'react';
import SignIn from './SignIn/SignIn';
// import { Container } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';

// import SignUp from './SignUp/SignUp';

import './SignIn/SignIn.css'
export class SignInUp extends Component {
  componentDidMount() {
    console.log('I have mounted');
  }
  render() {

    return (
      <div className="UM5R">

      <div className="BackGroundSignin">

        <SignIn auth={this.props.auth} />
      </div>
      </div>
      


    );
  }
}

export default SignInUp;
