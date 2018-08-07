import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';

import { store } from './store/index.js';
import AppContainer from './containers/appContainer';

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
