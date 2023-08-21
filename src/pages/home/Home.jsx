import React from 'react';
import './home.scss';
import background from "./forest.jpg";
import Logo from '../../components/logo/Logo';
import Arrow from '../../components/arrow/Arrow';
import Presentation from '../about/About';

export default function Home () {

    return (
        <div className='home'>
            <div className="container__home">
                <div className="container__home--image">
                    <img src={background} alt="background forest" />
                </div>
                
                <div className="home__content">
                    <Logo styles='home'/>
                    <h1 className='name'>Mickaël TURQUAIS</h1>
                    <h2 className='job'>Développeur Web - Mobile</h2>
                    <Arrow/>
                </div>
            </div>
            
            <Presentation/>
        </div>
    );
};
