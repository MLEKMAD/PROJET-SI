import React from 'react';
import logo from './logo.svg';
import './App.css';


import SignInUp from './components/SignInUp/SignInUp';
import { CIRHome } from './components/CIR/CIRHome';
import { CIRNavbar} from './components/CIR/CIRNavbar';
import {AddIdea} from './components/Client/AddIdea'
import {CNavbar} from './components/Client/CNavbar'


function App() {
  return (
    <div className="App">
    <CNavbar/>
    <AddIdea/>
    </div>
  );
}

export default App;
