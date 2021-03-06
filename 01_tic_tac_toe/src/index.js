import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
