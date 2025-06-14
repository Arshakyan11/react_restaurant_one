import React from "react";
import "./Footer.scss";
import { logo } from "../Images";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { useSelector } from "react-redux";
import { getAllReservationInfo } from "../../store/ReservationSlice/ReservationSlice";
const Footer = () => {
  const { userData } = useSelector(getAllReservationInfo);
  return (
    <section className="footerSec">
      <div className="container">
        <div className="footerSecMain">
          <div className="firstLine">
            <Link className="logoTitle" to={ROUTES.HOME}>
              eriso
            </Link>
            <p className="welcomeText">
              We're glad you're here! At ERISO, we serve fresh, flavorful dishes
              made with care. Thank you for dining with us
            </p>
            <div className="socialLinks">
              <a
                href="https://www.facebook.com/share/18UMZzsAgy/?mibextid=wwXIfrnp"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/erhamindustry?igsh=cXVrdjJobWt1cWc5&utm_source=qr"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://x.com/erhamindustry?s=21" target="_blank">
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com/@erham.industry?si=7ZBDgjGpKEpkkq9f"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="secondLine">
            <h2>Page</h2>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <NavLink to={ROUTES.MENU}>Menu</NavLink>
            <NavLink to={ROUTES.Search}>Search</NavLink>
            <NavLink to={ROUTES.RESERVATION}>Reservation</NavLink>
          </div>
          <div className="secondLine">
            <h2>Information</h2>
            <NavLink to={ROUTES.ABOUTUS}>About Us</NavLink>
            <NavLink to={ROUTES.RESTAURANTS}>Our Addresses</NavLink>
            <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink>
            <NavLink to={ROUTES.STAFF}>Our Staff</NavLink>
          </div>
          <div className="secondLine">
            <h2>Account</h2>
            {userData ? (
              <>
                <NavLink to={ROUTES.PROFILE}>Profile</NavLink>
                <NavLink to={`/${ROUTES.PROFILERESERVEDATE}`}>
                  Reserve Date
                </NavLink>
                <NavLink to={`/${ROUTES.PROFILEWISHLIST}`}>Wishlist</NavLink>
              </>
            ) : (
              <>
                <NavLink to={ROUTES.REGISTRATION}>Registration</NavLink>
                <NavLink to={ROUTES.LOGIN}>Login</NavLink>
              </>
            )}
          </div>
          <div className="secondLine">
            <h2>Get In Touch</h2>
            <p>AdminAdmin123@gmail.com</p>
            <a>+ 374-11-22-33-44</a>
          </div>
        </div>
        <p className="copyright">Copyright © 2025. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
