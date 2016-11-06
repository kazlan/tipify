import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import cards from './reducers/cards'

import { createEpicMiddleware } from 'redux-observable'
import { firebaseEpics } from './epics/firebase'
import firebase from 'firebase'
import 'rxjs'


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//firebase init
var fbconfig = {
  apiKey: "AIzaSyC3_3DQ97AUwbfPdCuXUw2SLh4BfGSskh8",
  authDomain: "tipify-adfdf.firebaseapp.com",
  databaseURL: "https://tipify-adfdf.firebaseio.com",
  storageBucket: "tipify-adfdf.appspot.com",
  messagingSenderId: "227144289179"
}
firebase.initializeApp(fbconfig)

const epicMiddleware = createEpicMiddleware(firebaseEpics)

let store = createStore(cards, compose(
      applyMiddleware(epicMiddleware),
      window.devToolsExtension ? window.devToolsExtension(): f=>f
    ))
//if (window.devToolsExtension) {
//  window.devToolsExtension.updateStore(store);
//}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
