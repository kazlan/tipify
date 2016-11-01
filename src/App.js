import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Deck from './components/Deck'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Tipify</h2>
          </div>
          <Deck />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
