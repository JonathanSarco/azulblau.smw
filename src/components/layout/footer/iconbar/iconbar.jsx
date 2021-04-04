import React from 'react';
import { SiInstagram, SiTwitter } from 'react-icons/si';
import './iconbar.scss'

function IconBar() {
    return (
        <div className='iconbar-container'>
            <div className='iconbar-container'><SiInstagram color='white'/></div>
            <div className='iconbar-container'><SiTwitter color='white'/></div>
        </div>
    )
}

export default IconBar;