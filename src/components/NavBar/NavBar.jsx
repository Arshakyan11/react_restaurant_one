import React, { useEffect, useRef, useState } from "react";
import "./NavBar.scss";
import { logo, logo1 } from "../Images";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { FaAddressCard, FaBars, FaUser } from "react-icons/fa";
import { FaRightToBracket } from "react-icons/fa6";
import { LogOutFromAccount } from "../../helpers/logOut";
const NavBar = () => {
  const dropDownRef = useRef();
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toogleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const handleScreenSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);
    const handleOffingDrop = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOffingDrop);
    return () => {
      document.removeEventListener("mousedown", handleOffingDrop);
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <nav className="mainNav">
      <div className="container">
        <div className="navSection">
          <div className="topNavSection">
            <div className="left">
              <img
                src={logo}
                alt="logo"
                onClick={() => navigate(ROUTES.HOME)}
              />
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
              {userInfo ? (
                <>
                  <Link to={ROUTES.PROFILE}>
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
                </>
              ) : (
                <>
                  <Link to={ROUTES.REGISTRATION}>
                    <FaAddressCard />
                    Sign Up
                  </Link>
                  <Link to={ROUTES.LOGIN}>
                    <FaRightToBracket />
                    Sign In
                  </Link>
                </>
              )}
            </div>
            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </div>
          </div>
          {screenWidth < 1085 && isOpen && (
            <div className="bottomNavSection">
              <div className="right">
                {userInfo ? (
                  <>
                    <Link to={ROUTES.PROFILE}>
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
                  </>
                ) : (
                  <>
                    <Link to={ROUTES.REGISTRATION}>
                      <FaAddressCard />
                      Sign Up
                    </Link>
                    <Link to={ROUTES.LOGIN}>
                      <FaRightToBracket />
                      Sign In
                    </Link>
                  </>
                )}
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
                      More Pages
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
