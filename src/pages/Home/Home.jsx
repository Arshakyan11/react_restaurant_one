import React from "react";
import styles from "./Home.module.scss";
import HeaderCuisine from "../../components/Header/HeaderCuisine";
import {
  reserveImg1,
  reserveImg2,
  reserveImg3,
  starRating,
  welcomeImg,
} from "../../components/Images";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import LittleMenuSection from "../../components/LittleMenuSection/LittleMenuSection";
import { restaurantChefs } from "../../components/data/chiefsData";
import { customerReview } from "../../components/data/customerData";
const Home = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.container}>
        <div className={styles.homeBox}>
          <HeaderCuisine />
          <div className={styles.welcomeSec}>
            <div className={styles.leftSide}>
              <img src={welcomeImg} alt="welcomeImg" />
            </div>
            <div className={styles.rightSide}>
              <p className={styles.welcome}>
                Welcome to <br /> <span>ERISO</span>
              </p>
              <p className={styles.welcomeText}>
                We’re thrilled to have you join us on a flavorful journey around
                the world. Here, every dish is crafted with passion, every
                ingredient is chosen with care, and every guest is treated like
                family. Whether you're craving comforting classics or curious to
                explore new tastes, we've prepared something special just for
                you. Sit back, relax, and let your culinary adventure begin!
              </p>
              <Link to={ROUTES.MENU}>See our Menu</Link>
            </div>
          </div>
          <LittleMenuSection />
          <div className={styles.reservationSec}>
            <div className={styles.leftSideReserve}>
              <img src={reserveImg1} alt="img" className={styles.mainImg} />
              <img
                src={reserveImg2}
                alt="img"
                className={styles.secondaryImg}
              />
              <img
                src={reserveImg3}
                alt="img"
                className={styles.secondaryImg2}
              />
            </div>
            <div className={styles.rightSideReserve}>
              <h2>
                Let's reserve <br />
                <span>a table</span>
              </h2>
              <p>
                Whether you're planning a romantic dinner, a family gathering,
                or a special celebration, we’re here to make your experience
                unforgettable. Reserve your table today and enjoy the finest
                cuisine, warm hospitality, and a welcoming atmosphere. We
                recommend booking in advance, especially on weekends, to ensure
                the perfect spot for you and your guests. Simply select your
                preferred date, time, and party size — and leave the rest to us.
              </p>
              <Link>Reservation</Link>
            </div>
          </div>
          <div className={styles.chiefSection}>
            <h2 className={styles.mainTitle}>Our greatest chef</h2>
            <div className={styles.chiefsBox}>
              {restaurantChefs.slice(0, 3).map((chief) => {
                return (
                  <div className={styles.eachChief}>
                    <img src={chief.img} alt="chiefImg" />
                    <h2>{chief.name}</h2>
                    <h3>{chief.position}</h3>
                  </div>
                );
              })}
            </div>
            <Link to={ROUTES.STAFF}>See Our Chef Team</Link>
          </div>
          <div className={styles.ourCustomers}>
            <h2>Our Customers Say</h2>
            {customerReview.map((elm) => {
              let randomStarCount = Math.round(Math.random() * 2 + 3);
              return (
                <div className={styles.eachCustomer} key={elm.id}>
                  <div className={styles.profileSec}>
                    <img src={elm.img} alt="img" />
                    <div className={styles.profileInfo}>
                      <h2>{elm.nickname}</h2>
                      <div className={styles.starReview}>
                        {Array(randomStarCount).map((count) => {
                          return (
                            <img src={starRating} alt="star" key={count} />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
