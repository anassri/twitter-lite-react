import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithContext from './AppWithContext';
import { BrowserRouter } from 'react-router-dom';


const Root = () => (
  <BrowserRouter>
    <AppWithContext />
  </BrowserRouter>
)
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
