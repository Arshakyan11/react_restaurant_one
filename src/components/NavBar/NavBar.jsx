import React, { useEffect, useRef, useState } from "react";
import "./NavBar.scss";
import { logo, logo1 } from "../Images";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { FaAddressCard, FaUser } from "react-icons/fa";
import { FaRightToBracket } from "react-icons/fa6";
import { LogOutFromAccount } from "../../helpers/logOut";
const NavBar = () => {
  const dropDownRef = useRef();
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toogleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
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
          {userInfo ? (
            <div className="right">
              <Link>
                <FaUser />
                Profile
              </Link>
              <button
                onClick={() => {
                  LogOutFromAccount(navigate);
                }}
              >
                <FaRightToBracket />
                Log Out
              </button>
            </div>
          ) : (
            <div className="right">
              <Link to={ROUTES.REGISTRATION}>
                <FaAddressCard />
                Sign Up
              </Link>
              <Link to={ROUTES.LOGIN}>
                <FaRightToBracket />
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
