import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar />
        <h1>HELLO</h1>

      </div>
    );
  }
}

export default App;
