import React from "react";
import styles from "./ProfileReservation.module.scss";
import { reserveDate } from "../../../components/Images";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Routes";

const ProfileReservation = () => {
  const userinfo = JSON.parse(localStorage.getItem("userInfo"));
  const isTrue = userinfo.reservation ? true : false;
  const date = userinfo.reservation?.date.split("T");

  return (
    <div className={styles.reserveDate}>
      <div className={styles.header}>
        <img src={reserveDate} alt="imgReserve" />
        <p className={styles.resereveInfoTextMain}>Your Tabel Bookings</p>
        <p className={styles.resereveInfoTextMiddle}>
          Here you can view and manage your upcoming table reservation
        </p>
        <p className={styles.resereveInfoTextLast}>
          Make sure to arrive on time and contact us if you need to modify or
          cancel a booking.
        </p>
      </div>
      <div className={styles.reserveDateInfo}>
        {isTrue ? (
          <div className={styles.reserveMainInfo}>
            <div className={styles.eachLine}>
              <p>Address:</p>
              <p>{userinfo.reservation.address}</p>
            </div>
            <div className={styles.eachLine}>
              <p>Date:</p>
              <p>{date[0]}</p>
            </div>
            <div className={styles.eachLine}>
              <p>Time:</p>
              <p>{date[1]}</p>
            </div>
            <div className={styles.eachLine}>
              <p>Number of Guests:</p>
              <p>{userinfo.reservation.count} people</p>
            </div>
            <div className={styles.eachLine}>
              <p>Table Experience:</p>
              <p>{userinfo.reservation.tableType}</p>
            </div>
          </div>
        ) : (
          <div className={styles.reserveNotFound}>
            <p>
              At this very time you didnt have any reservation , but you can go
              to reservation page and do it!
            </p>
            <Link to={`/${ROUTES.RESERVATION}`}>Reservation</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileReservation;
