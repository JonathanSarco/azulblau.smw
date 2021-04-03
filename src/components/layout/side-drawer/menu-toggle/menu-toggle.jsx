import React from 'react';
import './menu-toggle.scss';

function MenuToggle({ clicked, shrink }) {

    return (
        <div className={`toggle-menu toggle-menu--${!shrink ? 'big' : 'shrink'}`} onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuToggle;