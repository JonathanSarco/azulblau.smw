import React from 'react';
import LogoTitle from '../logo-title/logo-title';
import Logo from '../logo/logo';
import './footer.scss';
import IconBar from './iconbar/iconbar';

function Footer() {
    return (
        <footer>
            <Logo isFooter={true} />
            <LogoTitle isFooter={true} />
            <IconBar />
        </footer>
    )
}

export default Footer;