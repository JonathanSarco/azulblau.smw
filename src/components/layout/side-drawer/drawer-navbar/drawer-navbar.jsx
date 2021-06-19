import React from 'react';
import { Link } from "react-router-dom";
import { ABOUT, BLOG, CONTACT, HOME } from '../../constants';
import './drawer-navbar.scss';

function DrawerNavBar({ closeHandler }) {

    const closeDrawerHandler = () => {
      closeHandler()
    }

    return (
      <nav className="drawer-nav">
        <ul className="drawer-nav drawer-nav__items">

          <li className="drawer-nav drawer-nav__items item">
            <Link to="/" onClick={closeDrawerHandler}>{HOME}</Link>
          </li>

          <li className="drawer-nav drawer-nav__items item">
            <Link to="/about" onClick={closeDrawerHandler}>{ABOUT}</Link>
          </li>
  
          <li className="drawer-nav drawer-nav__items item">
            <Link to="/blog" onClick={closeDrawerHandler}>{BLOG}</Link>
          </li>
          
          <li className="drawer-nav drawer-nav__items item">{CONTACT}</li>
        </ul>
      </nav>
    );
  }
  
  export default DrawerNavBar;