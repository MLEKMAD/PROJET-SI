import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import history from './utils/history';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
