import React from 'react';
import Backdrop from '../../UI/backdrop/backdrop';
import Logo from '../logo/logo';
import DrawerNavBar from './drawer-navbar/drawer-navbar';
import './side-drawer.scss';

function SideDrawer({ open, closed }) {


    return (
        <>
            <Backdrop show={open} clicked={closed} />
            <div className={`drawer-container drawer-container${open ? '--open' : '--close'}`}>
                <Logo />
                <DrawerNavBar closeHandler={closed}/>
            </div>
        </>
    )
}

export default SideDrawer;