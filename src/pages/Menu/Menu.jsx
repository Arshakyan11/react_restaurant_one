import React from "react";
import styles from "./Menu.module.scss";
import Pagination from "../../components/Pagination/Pagination";
const Menu = () => {
  const mealTime = ["BreakFast", "Brunch", "Lunch", "Dinner"];
  const topCategories = [
    "sushi",
    "pizza",
    "soups",
    "bbq",
    "pasta",
    "steaks",
    "burger",
    "salads",
  ];
  const dessertsAndDrinks = ["cake", "milkshakes", "lemonade"];
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
              <div className={styles.forBackground}>
                <div className={styles.filtersMain}>
                  <ul className={styles.mealTime}>
                    <h2>MealTime</h2>
                    {mealTime.map((elm) => {
                      return <li>{elm}</li>;
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>Top Categories</h2>
                    {topCategories.map((elm) => {
                      return <li>{elm}</li>;
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>Desserts & Drinks</h2>
                    {dessertsAndDrinks.map((elm) => {
                      return <li>{elm}</li>;
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>By Price</h2>
                    <li>up to 5$</li>
                    <li>5$ - 10$</li>
                    <li>10$ - 20$</li>
                    <li>20$ - 30$</li>
                    <li>30$ - 40$</li>
                    <li>40$ - 50$</li>
                    <li>50$ and more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
