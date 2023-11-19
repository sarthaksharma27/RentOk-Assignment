import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { getApp } from './utils/helper';

const CurrentApp = getApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentApp />
    </BrowserRouter>
  </React.StrictMode>
);
