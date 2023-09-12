import React from 'react';
import './logo.scss';
import logo from "./logo2.png";

export default function Logo ({ styles = '' }) {
    return (
        <div className={`logo ${styles}`} >
            <img src={logo} alt="logo MTU" />
        </div>
    );
};