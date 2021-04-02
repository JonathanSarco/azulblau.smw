import React from 'react';
import './menu-toggle.scss';

function MenuToggle({ clicked }) {

    return (
        <div className='toggle-menu' onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuToggle;