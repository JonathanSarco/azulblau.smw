import React, { useState } from "react";
import './layout.scss'
import SideDrawer from "./side-drawer/side-drawer";
import Header from "./header/header";
import Footer from "./footer/footer";

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
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>

      <div className="main-content">
        {children}
      </div>

      <Footer />
    </>
  );
}

export default Layout;
