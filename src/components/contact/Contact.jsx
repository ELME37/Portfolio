import React from 'react';
import './contact.scss';
import Layout from '../../components/layout/Layout';
import FormContact from '../../components/formContact/FormContact';

export default function Contact () {
    return (
        <div className='contact' id='contact'>
            <Layout>
                <div className='contact__info'>
                    <h2 className='contact__title'>Contact</h2>
                    <p className='contact__citation'>"Prêt pour une collaboration créative ? Contactez-moi !"</p>
                </div>
                <FormContact/>
            </Layout>
        </div>
    );
};
