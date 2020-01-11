import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import history from './utils/history';
import AddCompany from './components/Client/AddCompany';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    items:[ { value: 'HOME', style: 'HomeSharpIcon',href:"" },
    { value: 'TEAM', style: 'GroupSharpIcon',href:"team" },
    { value: 'SETTINGS', style: 'SettingsApplicationsSharpIcon',href:"settings"  },]
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }));
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          items={this.state.items}
          show={this.state.sideDrawerOpen}
        />
        {backDrop}
        <main style={{ marginTop: '90px', padding: '5px' }} />
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}
export default App;
