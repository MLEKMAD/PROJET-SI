import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import CIRHome from '../components/CIR/CIRHome';
import States from '../components/CIR/States';
import Requests from '../components/CIR/Requests';
import SignInUp from '../components/SignInUp/SignInUp';
import CIRNavbar from '../components/CIR/CIRNavbar';
import Companies from '../components/CIR/Companies';
import Ideas from '../components/CIR/Ideas';
import CNavbar from '../components/Client/CNavbar';
import AddIdea from '../components/Client/AddIdea';
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
          <CIRNavbar />
          <CIRHome />
        </Route>
        <Route exact path="/sign">
          <SignInUp />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/ideas">
          <Ideas />
        </Route>
        <Route exact path="/addIdea">
          <CNavbar />
          <AddIdea />
        </Route>
        <Route path="/">
          <SignInUp />
        </Route>
      </Switch>
    );
  }
}
