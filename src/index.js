import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import cards from './reducers/cards'

import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics/root'
import 'rxjs'


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const epicMiddleware = createEpicMiddleware(rootEpic)

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
