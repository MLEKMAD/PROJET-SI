import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import CIRHome from '../components/CIR/CIRHome';
import States from '../components/CIR/States';
import Requests from '../components/CIR/Requests';
<<<<<<< Updated upstream
import SignInUp from '../components/SignInUp/SignInUp';
=======
import SignIn from '../components/SignInUp/SignIn/SignIn';
import SignUp from '../components/SignInUp/SignUp/SignUp';
import CIRNavbar from '../components/CIR/CIRNavbar';
>>>>>>> Stashed changes
import Companies from '../components/CIR/Companies';
import Ideas from '../components/CIR/Ideas';
import AddIdea from '../components/Client/AddIdea';
// import AddCompany from '../components/Client/AddCompany';
import GUHome from '../components/GU/GUHome'
import Pending from '../components/GU/Pending';
import Statistics from '../components/GU/Statistics';
import toolbar from '../components/Toolbar/Toolbar'
import { Toolbar } from '@material-ui/core';
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/states">
          
          <States />
        </Route>
        <Route exact path="/requests">
          <Requests />
        </Route>
        <Route exact path="/CIR">
          
          <CIRHome />
        </Route>
        <Route exact path="/GU">
          
          <GUHome />
        </Route>
<<<<<<< Updated upstream
        <Route exact path="/sign">
          
          <SignInUp />
=======
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
>>>>>>> Stashed changes
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/ideas">
          <Ideas />
        </Route>
        <Route exact path="/addIdea">
          <Toolbar />
          <AddIdea />
        </Route>
        <Route exact path="/addCompany">
          <Toolbar />
          
        </Route>
        <Route exact path="/pending">
          
          <Pending/>
        </Route>
        <Route exact path="/statistics">
          
          <Statistics/>
        </Route>
        <Route path="/">
<<<<<<< Updated upstream
          
          <SignInUp />
=======
          <SignUp />
>>>>>>> Stashed changes
        </Route>
      </Switch>
    );
  }
}
