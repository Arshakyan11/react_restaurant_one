import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../../../Routes";
import ProfileNav from "../ProfileNav/ProfileNav";
import LayOut from "../../../LayOut/LayOut";
import styles from "./ProfileLayOut.module.scss";
const ProfileLayOut = () => {
  return (
    <div className={styles.profileLayOut}>
      <div className={styles.container}>
        <div className={styles.profilelayOutMain}>
          <ProfileNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayOut;
