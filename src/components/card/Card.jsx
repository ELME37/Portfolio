// Import des librairies React
import React from 'react';
import { Link } from 'react-router-dom';
// Import du fichier ROUTES pour les liens
import ROUTES from '../../router/Routes';
// Import du fichier de style SCSS
import './card.scss';

// Définition du composant sous forme de fonction avec les props
export default function Card ({ id, title, image, job }) {
    // Eléments retourner par le composant
    return (
        <Link to={ROUTES.project(id)} key={id} className="card__link">
                <h3 className='card__title'>{title}<br/><br/>{job}</h3>
                <div className='card__image'>
                    <img src={image} alt={title} />
                </div>
        </Link>
    );
};