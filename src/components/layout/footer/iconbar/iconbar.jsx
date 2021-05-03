import React from 'react';
import { SiInstagram, SiTwitter } from 'react-icons/si';
import './iconbar.scss'

function IconBar() {
    return (
        <div className='iconbar-container'>
            <div className='iconbar-container'>
                <a href='https://www.instagram.com/azulblau.smw/' target="_blank">
                    <SiInstagram color='white' />
                </a>
            </div>
            <div className='iconbar-container'>
                <a href='https://twitter.com/AzulblauS' target='_blank'>
                    <SiTwitter color='white' />
                </a>
            </div>
        </div>
    )
}

export default IconBar;