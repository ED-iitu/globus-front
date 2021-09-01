import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashRouter } from "react-router-dom";
import './styles/index.scss';
import App from './App';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

