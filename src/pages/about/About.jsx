import React from 'react';
import './about.scss';
import Layout from '../../components/layout/Layout';
import Circle from '../../components/circle/Circle';
import Footer from '../../components/footer/Footer';

export default function About () {
    return (
        <div className='about' id='about'>
            <Layout>
                <Circle/>
               
            </Layout>
            <Footer/>
        </div>
    );
};