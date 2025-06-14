import React, { useEffect } from "react";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./OurRestourants.module.scss";
import RestaurantSlider from "../../components/RestaurantSlider/RestaurantSlider";
import { eachRestaurantData } from "../../data/eachRestaurant";
import Aos from "aos";

const OurRestourants = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <section className={styles.OurAddressSec}>
      <div className={styles.container}>
        <div className={styles.ourRestaurants}>
          {eachRestaurantData.map((elm) => {
            return (
              <div className={styles.firstRestaurant} data-aos="fade-left">
                <p className={styles.title}>
                  <span>ERISO</span> {elm.location}
                </p>
                <div className={styles.info}>
                  <p>
                    <FaLocationDot />
                    {elm.address}
                  </p>
                  <p>
                    <FaPhone />
                    {elm.phone}
                  </p>
                  <p>
                    <FaEnvelope />
                    {elm.email}
                  </p>
                  <p>
                    <FaClock />
                    {elm.workingTime}
                  </p>
                </div>
                <RestaurantSlider imagesArr={elm.images} />
                <div className={styles.location}>
                  <p>
                    <span> {elm.city}</span> <br />
                    {elm.info}
                  </p>
                  <iframe
                    src={elm.iframeLink}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurRestourants;
