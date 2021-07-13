import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../constants/routes";
import { signOut } from "../../../utilities/firebase";

const NavBarAuth = () => {
  return (
    <div className="NavBar">
      <a href="#main-menu" className="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <h1>Buy The Block</h1>
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
            <Link to={ROUTES.HOME}>Pre-qualifications</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Property Advisor</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Transfer Process guide</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>About Us</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Contact Us</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>My Account</Link>
          </li>
          <li className="navSignOut" onClick={signOut}>
            Sign Out
          </li>
        </ul>
      </nav>{" "}
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

export default NavBarAuth;
