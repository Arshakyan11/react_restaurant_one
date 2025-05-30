import React from "react";
import styles from "./Menu.module.scss";
import Pagination from "../../components/Pagination/Pagination";
const Menu = () => {
  return (
    <section className={styles.menuSec}>
      <div className={styles.container}>
        <div className={styles.restaurantMenu}>
          <div className={styles.tutorialMenu}>
            <span>Eriso</span>
            <h2>
              View Our <br /> New Menu
            </h2>
            <p>The freshest ingredients for you every day</p>
          </div>
          <h3 className={styles.menuTitle}>Menu</h3>
          <div className={styles.filtersAndMeals}>
            <div className={styles.filterBox}>
              <h2>Filters</h2>
              <div className={styles.filtersMain}>
                 <ul className={styles.mealTime}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>  
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
