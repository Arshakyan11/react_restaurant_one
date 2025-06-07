import React, { useEffect } from "react";
import styles from "./LineInfo.module.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
const LineInfo = ({ img, eachElName, middleTitle, info, linkTo, order }) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });
  return (
    <div className={styles.lineEachElement} data-aos="fade-up">
      <div className={styles.leftSide}>
        <h2>{eachElName}</h2>
        <p className={styles.midTitle}>{middleTitle}</p>
        <p className={styles.lineEachElInfo}>{info}</p>
        <Link to={linkTo}>Explore More</Link>
      </div>
      <div className={styles.rightSide} style={{ order: order }}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default LineInfo;
