import React from 'react';
import './contact.scss';
import Layout from '../../components/layout/Layout';
import FormContact from '../../components/formContact/FormContact';

export default function Contact () {
    return (
        <div className='contact' id='contact'>
            <div id='target--contact'></div>
            <Layout>
                <div className='contact__info'>
                    <h2 className='contact__title'><span className='skills__hook blue'>&lt;</span> Contact <span className='skills__hook red'>/&gt;</span></h2>
                    <p className='contact__citation'>"Prêt pour une collaboration créative ? Contactez-moi !"</p>
                </div>
                <FormContact/>
            </Layout>
        </div>
    );
};
