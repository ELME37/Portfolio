// Import des librairies React
import React from "react";
// Import du fichier de style SCSS
import './app.scss';
// Import des composants
import Router from "./router/Router";

// Définition du composant sous forme de fonction
export default function App() {
  // Eléments retourner par le composant
  return (
    <div className="App">
        <Router />
    </div>
  );
}