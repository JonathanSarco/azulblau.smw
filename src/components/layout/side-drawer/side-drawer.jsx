import React from 'react';
import Backdrop from '../../UI/backdrop/backdrop';
import Logo from '../logo/logo';
import './side-drawer.scss';

function SideDrawer({ open, closed }) {

    return (
        <>
            <Backdrop show={open} clicked={closed} />
            <div className={`drawer-container drawer-container${open ? '--open' : '--close'}`}>
                <div className='drawer-container__logo-container'>
                    <Logo />
                </div>
            </div>
        </>
    )
}

export default SideDrawer;