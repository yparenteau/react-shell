import * as ES6Promise from 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { ShellHeaderContainer } from '../src/containers/shell-header.container';

import './main.scss';

ES6Promise.polyfill();

const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ShellHeaderContainer />
    </Provider>,
    document.getElementById('root'));
}

render();
