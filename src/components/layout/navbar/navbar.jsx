import React from "react";
import { ABOUT, BLOG, CONTACT } from '../constants';
import './navbar.scss';

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav nav__items">
        <li className="nav nav__items__item">{ABOUT}</li>
        <li className="nav nav__items__item">{BLOG}</li>
        <li className="nav nav__items__item">{CONTACT}</li>
      </ul>
    </nav>
  );
}

export default NavBar;
