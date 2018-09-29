import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar'
import SHoppinList from './components/ShoppingList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar />
      <SHoppinList />
        <h1>HELLO</h1>

      </div>
    );
  }
}

export default App;
