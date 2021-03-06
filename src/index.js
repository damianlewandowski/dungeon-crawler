import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
)