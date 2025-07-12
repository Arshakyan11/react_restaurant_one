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
            <div className="firstLinebottomBox">
              <p className="welcomeText">
                We're glad you're here! At ERISO, we serve fresh, flavorful
                dishes made with care. Thank you for dining with us
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
          </div>
          {/* <div className="navigationBox"> */}
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
                <NavLink to={`/profile/${ROUTES.PROFILERESERVEDATE}`}>
                  Reserve Date
                </NavLink>
                <NavLink to={`/profile/${ROUTES.PROFILEWISHLIST}`}>
                  Wishlist
                </NavLink>
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
            <a href="mailto:AdminAdmin123@gmail.com">Write with Email</a>
            <a href="tel:+37411223344">Call Us</a>
          </div>
          {/* </div> */}
        </div>
        <p className="copyright">Copyright © 2025. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
