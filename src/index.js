import { render } from 'react-dom';
import React from 'react';
import App from './containers/app';
import './scss/local.scss';

render(
  <App />,
  document.getElementById('app')
);
