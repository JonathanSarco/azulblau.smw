import React from 'react';
import './logo-title.scss';
import { LOGO_TITLE } from '../constants';


function LogoTitle() {

    return (
        <div className="main-title">
            <div className="main-title__vertical" />
            <h2 className="main-title__title">{LOGO_TITLE}</h2>
        </div>
    )
}

export default LogoTitle;