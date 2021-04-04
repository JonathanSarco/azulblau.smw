import React, { useState, useEffect } from 'react';
import Logo from '../logo/logo';
import LogoTitle from '../logo-title/logo-title';
import NavBar from '../navbar/navbar';
import MenuToggle from '../side-drawer/menu-toggle/menu-toggle';
import './header.scss';

function Header({ sideDrawerToggleHandler }) {
    const [shrink, setShrink] = useState(false);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setShrink(window.pageYOffset > 60)
        );
      }
    }, []);

    return(
        <header className={`header-bar header-bar--${!shrink ? 'big' : 'small' }`}> 
            <Logo />
            <LogoTitle shrink={shrink}/>
            <NavBar />
            <MenuToggle clicked={sideDrawerToggleHandler} shrink={shrink}/>
        </header>
    );
}

export default Header;