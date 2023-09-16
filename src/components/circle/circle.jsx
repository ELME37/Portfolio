import React from 'react';
import './circle.scss';
import Plus from '../plus/plus';

export default function Circle ({ styles = '', title, circleStyles = '', isTop, toggleModal  }) {
    return (
        <div className={`circle ${styles}`} onClick={toggleModal}>
            <p className={`circle__title ${isTop ? 'title--top' : 'title--bottom'}`}>{title}</p>
            <Plus styles={circleStyles} onClick={toggleModal} />
        </div>
    );
};
