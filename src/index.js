// Import des librairies React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Import des composants
import App from './App';

// Création du root React à l'aide de ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendu du composant dans le root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);