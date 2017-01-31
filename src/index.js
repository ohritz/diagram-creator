// Set up your application entry point here...

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Shell from './components/shell';
/* eslint-disable import/default */
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render(
  <Provider store={store}><Shell /></Provider>, document.getElementById('app')
);