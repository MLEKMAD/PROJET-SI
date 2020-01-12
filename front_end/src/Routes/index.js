import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Route from './Route';

import CIRHome from '../components/CIR/CIRHome';
import States from '../components/Client/States';

import SignInUp from '../components/SignInUp/SignInUp';

import AddIdea from '../components/Client/AddIdea';
import AddCompany from '../components/Client/AddCompany';
import GUHome from '../components/GU/GUHome'
import Pending from '../components/GU/Pending';
import Statistics from '../components/GU/Statistics';
import toolbar from '../components/Toolbar/Toolbar'
import { Toolbar } from '@material-ui/core';
import Details from '../components/CIR/Details';
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/states">
          
          <States />
        </Route>
       
        <Route exact path="/CIR">
          
          <CIRHome />
        </Route>
        <Route exact path="/GU">
          
          <GUHome />
        </Route>
        <Route exact path="/sign">
          
          <SignInUp />
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
        <Route  path="/details ">
          <Toolbar/>
          <Details/>
        </Route>
        <Route exact path="/statistics">
          
          <Statistics/>
        </Route>
        <Route path="/">
          
          <SignInUp />
        </Route>
      </Switch>
    );
  }
}
