import React from 'react';
import { Switch,Route } from 'react-router-dom';
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
export default function Routes() {
  return (
    <Switch>
      <Route path="/states">
        <States />
      </Route>
      <Route path="/requests">
        <Requests />
      </Route>
      <Route path="/CIR">
        <CIRNavbar />
        <CIRHome />
      </Route>
      <Route path="/sign">
        <SignInUp />
      </Route>
      <Route path="/companies">
        <Companies />
      </Route>
      <Route path="/ideas">
        <Ideas />
      </Route>
      <Route path="/addIdea">
        <CNavbar />
        <AddIdea />
      </Route>
      <Route path="/">
      <SignInUp/>
      </Route>
    </Switch>
  );
}
