import React, { useEffect } from "react";
import styles from "./Menu.module.scss";
import Pagination from "../../components/Pagination/Pagination";
import {
  dessertsAndDrinks,
  mealTime,
  topCategories,
} from "../../data/menuData";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuInfo } from "../../store/MenuSlice/MenuSlice";
import { fetchingGlobalMenu } from "../../store/api/api";
import { starRating } from "../../components/Images";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
const Menu = () => {
  const dispatch = useDispatch();
  const { selectedItems } = useSelector(getAllMenuInfo);
  console.log(selectedItems);

  useEffect(() => {
    dispatch(fetchingGlobalMenu("bbq"));
  }, []);
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
                      return <li key={nanoid(2)}>{elm}</li>;
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>Top Categories</h2>
                    {topCategories.map((elm) => {
                      return <li key={nanoid(2)}>{elm}</li>;
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>Desserts & Drinks</h2>
                    {dessertsAndDrinks.map((elm) => {
                      return <li key={nanoid(2)}>{elm}</li>;
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
            <div className={styles.allMenuIngredients}>
              {selectedItems.map((elm, index) => {
                const each = elm.recipe;
                let randomStar = Math.round(Math.random() * 2 + 3);
                let ingredients = each.ingredientLines.slice(0, 2);
                return (
                  <div key={index} className={styles.eachMenu}>
                    <img
                      src={each.images?.REGULAR.url}
                      alt=""
                      className={styles.mealImg}
                    />
                    <div className={styles.infoOfMeal}>
                      <h2>{each.label}</h2>
                      <div className={styles.stars}>
                        <span>Rate:</span>
                        {[...Array(randomStar)].map((_, i) => {
                          return <img key={i} src={starRating} alt="star" />;
                        })}
                      </div>
                      <div className={styles.ingredients}>
                        <h3>Ingredients:</h3>
                        <div className={styles.ingredientsName}>
                          {ingredients.map((elm, ind) => {
                            return (
                              <p key={ind}>
                                {`${ind + 1})`} {elm}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      <div className={styles.priceAndOrderNow}>
                        <div className={styles.priceBox}>
                          <span>Price:</span>
                          <p> ${each.price}</p>
                        </div>
                        <Link>Order Now</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
