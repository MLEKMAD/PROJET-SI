import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import CIRHome from '../components/CIR/CIRHome';
import States from '../components/CIR/States';
import Requests from '../components/CIR/Requests';
import SignInUp from '../components/SignInUp/SignInUp';
import Companies from '../components/CIR/Companies';
import Ideas from '../components/CIR/Ideas';
import CNavbar from '../components/Client/CNavbar';
import AddIdea from '../components/Client/AddIdea';
import AddCompany from '../components/Client/AddCompany';
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
          <CNavbar/>
          <States />
        </Route>
        <Route exact path="/requests">
          <Requests />
        </Route>
        <Route exact path="/CIR">
          <CNavbar/>
          <CIRHome />
        </Route>
        <Route exact path="/GU">
          <CNavbar />
          <GUHome />
        </Route>
        <Route exact path="/sign">
          <CNavbar/>
          <SignInUp />
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
          <CNavbar />
          <Pending/>
        </Route>
        <Route exact path="/statistics">
          <CNavbar />
          <Statistics/>
        </Route>
        <Route path="/">
          <CNavbar/>
          <SignInUp />
        </Route>
      </Switch>
    );
  }
}
