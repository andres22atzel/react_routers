import React from "react";
//To use link and prevent the router changes to reload the components, we use links and navlinks
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li>
              {/* Here we use a link tag */}
            <Link to="/">Home</Link>
          </li>
          <li>
              {/* Here we use NavLinks, It place a class active to the tag */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
