import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/reset.css';
import '../src/css/style.css';
import App from './Components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);