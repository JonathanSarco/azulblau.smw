import React, { useState } from "react";
import Logo from "./logo/logo";
import NavBar from "./navbar/navbar";
import './layout.scss'
import LogoTitle from "./logo-title/logo-title";
import SideDrawer from "./side-drawer/side-drawer";
import MenuToggle from "./side-drawer/menu-toggle/menu-toggle";

function Layout({ children }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);


  const sideDrawerClosedHandler = () => {
      setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
      setShowSideDrawer(!showSideDrawer);
  }

  return (
    <>
    <header className="header-bar"> 
      <Logo />
      <LogoTitle />
      <NavBar />
      <MenuToggle clicked={sideDrawerToggleHandler}/>
    </header>

    <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
    
    <div className="main-container">
      {children}
    </div>
    </>
  );
}

export default Layout;
