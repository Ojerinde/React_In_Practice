import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css' // To be used accross the entire application

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(<App/> , document.getElementById('root'))

