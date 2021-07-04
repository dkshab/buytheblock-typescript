import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../../constants/routes";

const NavBarNonAuth = () => {
  return (
    <div className="NavBar">
      <a href="#main-menu" className="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>

      <h1 className="logo">Buy The Block</h1>
      <nav id="main-menu" className="main-menu">
        <a
          href="#main-menu-toggle"
          className="menu-close"
          aria-label="Close main menu"
        >
          <span className="sr-only">Close main menu</span>
          <span className="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>home</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>pre-qualifications</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>property advisor</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>transfer process guide</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>about us</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>contact us</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>my account</Link>
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line */}
      <a
        href="#main-menu-toggle"
        className="backdrop"
        tabIndex={-1}
        aria-hidden="true"
        hidden
      ></a>
    </div>
  );
};

export default NavBarNonAuth;
