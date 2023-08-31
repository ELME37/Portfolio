import React from 'react';
import './home.scss';
import background from "./forest.jpg";
import Logo from '../../components/logo/Logo';
import Arrow from '../../components/arrow/Arrow';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Footer from '../../components/footer/Footer';
import Contact from '../contact/Contact';
import Header from '../../components/header/Header';

export default function Home () {

    return (
        <div className='home'>
            <div className="container__home">
                <div className="container__home--image">
                    <img src={background} alt="background forest" />
                </div>
                
                <div className="home__content">
                    <Logo styles='home'/>
                    <div id="target--about"></div>
                    <h1 className='name'>Mickaël TURQUAIS</h1>
                    <h2 className='job'>Développeur Web - Mobile</h2>
                    <Arrow/>
                    
                </div>
            </div>
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
