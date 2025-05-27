import React, { useEffect, useRef, useState } from "react";
import "./NavBar.scss";
import { logo, logo1 } from "../Images";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../Routes";
const NavBar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toogleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const dropDownRef = useRef();

  useEffect(() => {
    const handleOffingDrop = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOffingDrop);
    return () => {
      document.removeEventListener("mousedown", handleOffingDrop);
    };
  }, []);

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
              <li className="dropDown" ref={dropDownRef}>
                <button
                  type="button"
                  className="dropDownToggle"
                  onClick={toogleDropDown}
                >
                  More...
                </button>
                {isDropDownOpen && (
                  <div className="dropDownMenu">
                    <NavLink to={ROUTES.RESERVATION}>Reservation</NavLink>
                    <NavLink to={ROUTES.RESTAURANTS}>Our Addresses</NavLink>
                    <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink>
                    <NavLink to={ROUTES.STAFF}>Our Staff</NavLink>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="right">
            <Link to={ROUTES.RESERVATION}>Sign Up</Link>
            <Link to={ROUTES.RESERVATION}>Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
