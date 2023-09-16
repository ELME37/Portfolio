import React from 'react';
import './modal.scss';
import photo from "./cerf.jpg";

export default function Modal({ isOpen, toggleModal, children, styles='' }) {
    if (!isOpen) {
        return null;
    }

    function stopPropagation(e) {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${styles}`} onClick={toggleModal}>
            <div className={`modal-content ${styles}`} onClick={stopPropagation}>
                <button className="btn__close" onClick={toggleModal}><svg className='close' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></button>
                <img className='modal__photo' src={photo} alt="cerf" />
                <div className='modal__content'>{children}</div>
            </div>
        </div>
    );

}
