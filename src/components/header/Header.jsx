import React, { useState, useEffect } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ROUTES from '../../router/Routes';
import './header.scss';
import Logo from '../logo/Logo';

export default function Header () {
    const [headerScroll, setHeaderScroll] = useState('');

    useEffect(() => {
        function scroll() {
            const sections = [
                { id: 'target--about', className: 'target--about' },
                { id: 'target--skills', className: 'target--skills' },
                { id: 'target--projects', className: 'target--projects' },
                { id: 'target--contact', className: 'target--contact' },
            ];
    
            let currentScroll = '';
        
        for (const section of sections) {
            const targetElement = document.getElementById(section.id);
            if (targetElement) {
                const { top } = targetElement.getBoundingClientRect();
                if (top <= 0) {
                    currentScroll = `scrolled--${section.className}`;
                }
            }
        }

        setHeaderScroll(currentScroll);
    }

    window.addEventListener('scroll', scroll);

    return () => {
        window.removeEventListener('scroll', scroll);
    };
}, []);
    

    return (
        <header className={`header ${headerScroll}`}>
            
            <Link to={ROUTES.home} className="header__logo">
                <Logo styles='logo--header'/>
            </Link>

            <nav className="header__navigation">
                <ul className="navigation__list">
                    <li className='navigation__list--item'>
                        <NavLink to={ROUTES.home} className="navigation__item--link">
                            <svg className='header__svg--brown' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                            <p className='header__title--blue'>Accueil</p>
                        </NavLink>
                    </li>
                    <li className='navigation__list--item'>
                        <HashLink to={ROUTES.about} className={`navigation__item--link ${headerScroll === 'scrolled--about' ? 'scrolled--about' : ''}`}>
                            <svg className='header__svg--blue' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            <p className='header__title--brown'>A Propos</p>
                        </HashLink>
                    </li>
                    <li className='navigation__list--item'>
                        <HashLink to={ROUTES.skills} className={`navigation__item--link ${headerScroll === 'scrolled--skills' ? 'scrolled--skills' : ''}`}>
                            <svg className='header__svg--brown' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                            <p className='header__title--blue'>Compétences</p>
                        </HashLink>
                    </li>
                    <li className='navigation__list--item'>
                        <HashLink to={ROUTES.projects} className={`navigation__item--link ${headerScroll === 'scrolled--projects' ? 'scrolled--projects' : ''}`}>
                            <svg className='header__svg--blue' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"/></svg>
                            <p className='header__title--brown'>Projets</p>
                        </HashLink>
                    </li>
                    <li className='navigation__list--item'>
                        <HashLink to={ROUTES.contact} className={`navigation__item--link ${headerScroll === 'scrolled--contact' ? 'scrolled--contact' : ''}`}>
                            <svg className='header__svg--brown' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <p className='header__title--blue'>Contact</p>
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};