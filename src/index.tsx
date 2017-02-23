// Set up your application entry point here...

import * as React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Shell from './components/shell';
/* eslint-disable import/default */

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore({});

render(
  <Provider store={store}><Shell /></Provider>, document.getElementById('app')
);