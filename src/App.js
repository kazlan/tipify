import React from 'react';
import './App.css';
import Cards from './components/Cards'
import AppBar from 'material-ui/AppBar'

const App = ()=>
  <div className="App">
    <AppBar title="tipify"/>
    <Cards />
  </div>

export default App;
