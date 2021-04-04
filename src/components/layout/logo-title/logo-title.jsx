import React from 'react';
import './logo-title.scss';
import { LOGO_TITLE } from '../constants';


function LogoTitle({ shrink, isFooter = false }) {

    return (
        <div className={`main-title${shrink ? '--shrink' : ''}`}>
            <div className={`main-title__vertical main-title__vertical--${isFooter ? 'footer' : 'header'}`} />
            <h2 className={`main-title__title ${isFooter ? 'main-title__title--footer' : ''}`}>{LOGO_TITLE}</h2>
        </div>
    )
}

export default LogoTitle;