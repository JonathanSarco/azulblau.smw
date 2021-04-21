import React from "react";
import { Link } from "react-router-dom";
import { ABOUT, BLOG, CONTACT } from '../constants';
import './navbar.scss';

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav nav__items">
        <Link to="/about" className="nav nav__items__item">{ABOUT}</Link>
        <li className="nav nav__items__item">{BLOG}</li>
        <li className="nav nav__items__item">{CONTACT}</li>
      </ul>
    </nav>
  );
}

export default NavBar;
