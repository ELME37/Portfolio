import React from 'react';
import './rectangle.scss';

export default function Rectangle ({ styles = '', children ='' }) {
    return (
        <div className={`rectangle ${styles}`}>
            <span></span>
            <div className='rectangle__content'>{children}</div>
        </div>
    );
};