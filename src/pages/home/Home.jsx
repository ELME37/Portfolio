import React from 'react';
import './home.scss';
import Logo from '../../components/logo/Logo';
import ArrowDown from '../../components/arrowDown/ArrowDown';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ArrowUp from '../../components/arrowUp/ArrowUp';

export default function Home () {

    return (
        <div className='home'>
            <div className="container__home">
             
                <div className="home__content">
                    <Logo styles='home'/>
                    <div id="target--about"></div>
                    <h1 className='name'>Mickaël TURQUAIS</h1>
                    <p className='job'>Développeur Web</p>
                    <ArrowDown/>
                </div>
            </div>
            <ArrowUp/>
            <Header/>
            <main className='main'>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
};
