import React from "react";
import "./NavBar.scss";
import { logo } from "../Images";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Routes";
const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navSection">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="middle">
            <ul>
              <li>
                <NavLink to={ROUTES.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.MENU}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.ABOUTUS}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.Search}>Search</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.RESERVATION}>Reservation</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.RESTAURANTS}>Our Addresses</NavLink>
              </li>
            </ul>
          </div>
          <div className="right">
            <NavLink>Sign Up</NavLink>
            <NavLink>Sign In</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
