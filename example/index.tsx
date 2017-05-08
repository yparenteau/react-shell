import * as ES6Promise from 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducers';

import './main.scss';
import { Provider } from 'react-redux';
import { NavigationContainer } from '../src/containers/navigation.container';

ES6Promise.polyfill();

const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <NavigationContainer />
    </Provider>,
    document.getElementById('root'));
}

render();
