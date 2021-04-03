import React, { useState, useEffect } from "react";
import Logo from "./logo/logo";
import NavBar from "./navbar/navbar";
import './layout.scss'
import LogoTitle from "./logo-title/logo-title";
import SideDrawer from "./side-drawer/side-drawer";
import MenuToggle from "./side-drawer/menu-toggle/menu-toggle";

function Layout({ children }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setShrink(window.pageYOffset > 60)
      );
    }
  }, []);

  const sideDrawerClosedHandler = () => {
      setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
      setShowSideDrawer(!showSideDrawer);
  }

  return (
    <>
    <header className={`header-bar header-bar--${!shrink ? 'big' : 'small' }`}> 
      <Logo />
      <LogoTitle shrink={shrink}/>
      <NavBar />
      <MenuToggle clicked={sideDrawerToggleHandler} shrink={shrink}/>
    </header>

    <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
    
    <div className="main-container">
      {children}
    </div>
    </>
  );
}

export default Layout;
