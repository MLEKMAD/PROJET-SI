import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";


import SignInUp from './components/SignInUp/SignInUp';
import { CIRHome } from './components/CIR/CIRHome';
import { CIRNavbar} from './components/CIR/CIRNavbar';
import {AddIdea} from './components/Client/AddIdea'
import {CNavbar} from './components/Client/CNavbar'


function App() {
  return (
  
    <div className="App">
      <Router>
      <Switch>
          <Route exact path='/SignUp'>
            <SignInUp/>
          </Route>
          <Route exact path='/SignIn'>
            <SignInUp/>
          </Route>
          <Route exact path='/addIdea'>
            <CNavbar/>
            <AddIdea/>
          </Route>
          <Route exact path='/CIR'>
            <CIRNavbar/>
            <CIRHome/>
          </Route>
          <Route path='/'>
            <SignInUp/>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}


export default App;
