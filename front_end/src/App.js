import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import history from './utils/history';
<<<<<<< Updated upstream
import AddCompany from './components/Client/AddCompany'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'

class App extends Component {
 state = {
   sideDrawerOpen : false

 };
 
 drawerToggleClickHandler = () => {
  this.setState(prevState => ({
    sideDrawerOpen : !prevState.sideDrawerOpen
  }))
};

  backDropClickHandler= () => {
    this.setState({sideDrawerOpen : false});
      
    };
  



  render(){
    let backDrop;
    if (this.state.sideDrawerOpen){
      backDrop = <BackDrop click = {this.backDropClickHandler}/>;
    }
      
      
      return (
        
        <div style={{height : '100%'}}>
      <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backDrop}
      <main style={{marginTop: '90px', padding :'5px' }}/>
=======
// import AddCompany from './components/Client/AddCompany'
function App() {
  return (
    <div className="App">
>>>>>>> Stashed changes
      <Router history={history}>
        <Routes/>
      </Router>
    </div>
  );
}
}
export default App;
