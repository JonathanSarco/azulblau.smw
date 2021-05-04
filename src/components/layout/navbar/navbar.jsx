import React from "react";
import { Link } from "react-router-dom";
import { ABOUT, BLOG, CONTACT } from '../constants';
import './navbar.scss';

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav nav__items">
        
        <li className="nav nav__items__item">
          <Link to="/about" >{ABOUT}</Link>
        </li>

        <li className="nav nav__items__item">
          <Link to="/blog">{BLOG}</Link>
        </li>
        
        <li className="nav nav__items__item">{CONTACT}</li>
      </ul>
    </nav>
  );
}

export default NavBar;
