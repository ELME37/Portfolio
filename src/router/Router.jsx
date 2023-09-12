// Import des librairies React
import React from 'react';
import {Routes, Route } from 'react-router-dom';
// Import des composants
import Home from '../pages/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Project from '../pages/project/Project';
import Contact from '../components/contact/Contact';
import Error404 from '../pages/error404/Error404.jsx';
import ROUTES from './Routes';


// Définition du composant sous forme de fonction
export default function Router () {
    // Eléments retourner par le composant
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.skills} element={<Skills />} />
            <Route path={ROUTES.projects} element={<Projects />} />
            <Route path={ROUTES.project()} element={<Project />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};