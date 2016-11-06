import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import Cards from './components/Cards'
import AppBar from 'material-ui/AppBar'
import EditBox from './components/EditBox'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class App extends Component {
  constructor(props){
    super(props)
    this.state={edit: false}
  }
  
  componentWillMount() {
    this.props.dispatch({type: "LOAD_DATA"})
  }
  
  showEditBox = (show)=>{
    this.setState({edit: show}) 
  }
  render() {
    return (
      <div className="App">
        <AppBar 
          title="tipify"
          onTitleTouchTap={()=>this.props.dispatch({type:"RESET_HAND"})}
          iconElementRight={<IconButton><ContentAdd /></IconButton>}
          onRightIconButtonTouchTap={()=>this.showEditBox(true)}
          showMenuIconButton={false}
          zDepth={2}
        />
        { this.state.edit?
          <EditBox  onCancel={()=>this.showEditBox(false)}/> : null
        }
        <Cards />
      </div>
    );
  }
}

export default connect()(App)



