import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import './global/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

