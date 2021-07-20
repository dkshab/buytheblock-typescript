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

      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src="/Logo.png" alt="" width="70px" height="auto" />
        </Link>
      </div>

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
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Pre-qualifications</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Property Advisor</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Transfer Process guide</Link>
          </li>
          <li>
            <Link to={ROUTES.FAQ}>FAQ</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About Us</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT}>Contact Us</Link>
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
