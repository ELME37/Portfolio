import React from 'react';
import './computer.scss';
import computer from './ordinateur.png'

export default function Computer ({ video }) {
    return (
        <div className='computer'>
            <div className='computer__medias'>
                <img className='computer__image' src={computer} alt="" />
                <div className='computer__video--container'>
                    <video className='computer__video' src={video} controls autoPlay muted ></video>
                </div>
            </div>
        </div>
    );
};