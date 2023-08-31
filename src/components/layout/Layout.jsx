// Import des librairies React
import React from "react";
// Import du fichier de style SCSS
import './layout.scss';
// Import des composants

// Définition du composant sous forme de fonction avec les props
export default function Layout ({children}){
    // Eléments retourner par le composant
    return (
    <div className="container">
            {children}
    </div>)
}