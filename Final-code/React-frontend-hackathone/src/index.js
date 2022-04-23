import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { TracsactionProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TracsactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TracsactionProvider>
);


reportWebVitals();
