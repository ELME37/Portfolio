import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './about.scss';
import ROUTES from '../../router/Routes';
import Layout from '../../components/layout/Layout';
import Rectangle from '../../components/rectangle/Rectangle';
import Modal from '../../components/modal/Modal';

export default function About () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleOutsideClick = (e) => {
        if (isModalOpen && e.target.classList.contains('about')) {
            toggleModal();
        }
    };

    return (
        <div className='about' id='about' onClick={handleOutsideClick}>
            <Layout>
                <h2 className='about__title'><span className='skills__hook blue'>&lt;</span> A propos <span className='skills__hook red'>/&gt;</span></h2>
                <Rectangle styles='description' 
                    children={
                        <>
                            <p className='presentation'>Je suis Mickaël TURQUAIS, <strong>Développeur Web - Mobile</strong> spécialisé dans les technologies <strong>Javascript</strong> basé en <strong>Indre et Loire</strong>.</p>
                            <hr/>
                            <p className='presentation'>Je suis axé sur des valeurs clés telles que la qualité, l'écoute, la créativité et la satisfaction du client.</p>
                            <hr/>
                            <p className='presentation'>Ensemble collaborons pour transformer votre vision en une réalité numérique captivante et inovante.</p>
                            <button className='btn__modal' onClick={toggleModal}><svg className='plusInfos' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <title>En savoir +</title>
                                <desc>En savoir + Logo</desc>
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                            </button>
                        </>
                    } 
                />
                <Rectangle styles='brown'/>
                <Rectangle styles='photo'/>
                <Modal isOpen={isModalOpen} toggleModal={toggleModal} 
                    children={
                        <>
                            <p className='modal__presentation'>Fort de dix années d'expérience en tant que Gestionnaire des Ressources Humaines, j'ai évolué dans le monde dynamique de la gestion du personnel, développant des compétences précieuses en gestion du changement, en résolution de problèmes et en communication.</p>
                            <p className='modal__presentation'>L'année 2020 a été le début d'une nouvelle aventure et m'a apporté de nouveaux défis avec la pandémie du COVID-19, ce qui m'a poussé à explorer de nouveaux horizons.</p>
                            <p className='modal__presentation'>Face à cette situation, j'ai saisi l'opportunité de me plonger dans le <strong>développement</strong> en apprenant le langage <strong>Visual Basic for Applications (VBA) de Microsoft</strong>.</p>
                            <p className='modal__presentation'>Cette transition m'a permis de répondre aux nouveaux besoins RH émergents de cette crise en acquérant de nouvelles compétences techniques nécessaires pour créer des solutions numériques pertinentes et conviviales.</p>
                            <p className='modal__presentation'>En janvier 2023, j'ai franchi une nouvelle étape en entreprenant une formation en <strong>développement web</strong> sur OpenClassrooms.</p>
                            <p className='modal__presentation'>Cette formation m'a permis d'acquérir des compétences solides dans les technologies web modernes, élargissant ainsi mon champ d'expertise.</p>
                            <div className='modal__links'>
                                <HashLink to={ROUTES.skills} className="modal__link" onClick={toggleModal}>
                                    Voir les compétences
                                </HashLink>
                                <HashLink to={ROUTES.projects} className="modal__link" onClick={toggleModal}>
                                    Voir les projets
                                </HashLink>
                            </div>
                        </>
                    }
                />
            </Layout>
            <div id='target--skills'></div>
        </div>
    );
};