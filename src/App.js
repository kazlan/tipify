import React from 'react';
import './App.css';
import Cards from './components/Cards'
import AppBar from 'material-ui/AppBar'
import EditBox from './components/EditBox'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const App = ()=>
  <div className="App">
    <AppBar 
      title="tipify"
      iconElementRight={<IconButton><ContentAdd /></IconButton>}
      showMenuIconButton={false}
      zDepth={2}
    />
    <EditBox />
    <Cards />
  </div>

export default App;
