import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/authContext';
import { SearchProvider } from './Context/searchContext';
import { CartProvider } from './Context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);