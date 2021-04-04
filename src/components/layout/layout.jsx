import React, { useState } from "react";
import './layout.scss'
import SideDrawer from "./side-drawer/side-drawer";
import Header from "./header/header";

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
    <Header sideDrawerToggleHandler={sideDrawerToggleHandler} />

    <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
    
    <div className="main-container">
      {children}
    </div>
    </>
  );
}

export default Layout;
