import React from "react";
//To use link and prevent the router changes to reload the components, we use links and navlinks
//Also we are using withRouter to make a wrapper which allow the component receive the router history
//by props
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (/*props*/) => {
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="/" className="brand-logo">Poke'Times</a>
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

//here we are wrapping the Navbar component with the withRouter
export default withRouter(Navbar);
