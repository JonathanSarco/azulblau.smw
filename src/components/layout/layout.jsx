import React from "react";
import Logo from "./logo/logo";
import NavBar from "./navbar/navbar";
import './layout.scss'
import LogoTitle from "./logo-title/logo-title";

function Layout({ children }) {
  return (
    <>
    <header className="header-bar">
      <Logo />
      <LogoTitle />
      <NavBar />
    </header>
    <div className="main-container">
      {children}
    </div>
    </>
  );
}

export default Layout;
