import React from 'react';
import ReactDOM from 'react-dom';// This will help to connect to html file

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),// It will get the html file from the public folder with id "root"
);
