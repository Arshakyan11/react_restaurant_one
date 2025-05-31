import React, { useEffect } from "react";
import styles from "./Menu.module.scss";
import Pagination from "../../components/Pagination/Pagination";
import {
  dessertsAndDrinks,
  mealTime,
  topCategories,
} from "../../data/menuData";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMenuInfo,
  setFilteredDataByPrice,
} from "../../store/MenuSlice/MenuSlice";
import { fetchingGlobalMenu } from "../../store/api/api";
import { starRating } from "../../components/Images";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  getAllPagination,
  setInfoAboutPagination,
} from "../../store/PaginationSlice/paginationSlice";
const Menu = () => {
  const dispatch = useDispatch();
  const { selectedItems, selectedParams } = useSelector(getAllMenuInfo);
  const { slicedData } = useSelector(getAllPagination);

  useEffect(() => {
    dispatch(fetchingGlobalMenu("BreakFast"));
  }, []);
  useEffect(() => {
    dispatch(
      setInfoAboutPagination({
        data: selectedItems,
        postsPerPage: 6,
        currentPage: 1,
      })
    );
  }, [selectedItems]);

  const handleMenuChoosing = (query) => {
    if (query != selectedParams) {
      dispatch(fetchingGlobalMenu(query));
    }
  };

  const handleFilteringData = (min, max) => {
    dispatch(setFilteredDataByPrice({ min, max }));
  };

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
                      return (
                        <li
                          key={nanoid(5)}
                          onClick={() => handleMenuChoosing(elm)}
                          className={
                            selectedParams == elm
                              ? styles.activatedMenuFilter
                              : ""
                          }
                        >
                          {elm}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>Top Categories</h2>
                    {topCategories.map((elm) => {
                      return (
                        <li
                          key={nanoid(6)}
                          onClick={() => handleMenuChoosing(elm)}
                          className={
                            selectedParams == elm
                              ? styles.activatedMenuFilter
                              : ""
                          }
                        >
                          {elm}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>Desserts & Drinks</h2>
                    {dessertsAndDrinks.map((elm) => {
                      return (
                        <li
                          key={nanoid(4)}
                          onClick={() => handleMenuChoosing(elm)}
                          className={
                            selectedParams == elm
                              ? styles.activatedMenuFilter
                              : ""
                          }
                        >
                          {elm}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={styles.mealTime}>
                    <h2>By Price</h2>
                    <li onClick={() => handleFilteringData(0, 5)}>up to 5$</li>
                    <li onClick={() => handleFilteringData(6, 10)}>6$ - 10$</li>
                    <li onClick={() => handleFilteringData(11, 20)}>
                      11$ - 20$
                    </li>
                    <li onClick={() => handleFilteringData(21, 30)}>
                      21$ - 30$
                    </li>
                    <li onClick={() => handleFilteringData(31, 40)}>
                      31$ - 40$
                    </li>
                    <li onClick={() => handleFilteringData(41, 50)}>
                      41$ - 50$
                    </li>
                    <li onClick={() => handleFilteringData(51, 1000)}>
                      51$ and more
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.menuBox}>
              <div className={styles.allMenuIngredients}>
                {slicedData.map((elm, index) => {
                  const each = elm.recipe;
                  let randomStar = Math.round(Math.random() * 2 + 3);
                  return (
                    <div key={nanoid(4)} className={styles.eachMenu}>
                      <img
                        src={each.images?.REGULAR.url}
                        alt="img"
                        className={styles.mealImg}
                      />
                      <div className={styles.infoOfMeal}>
                        <h2>{each.label}</h2>
                        <div className={styles.stars}>
                          <div className={styles.onlyStars}>
                            {[...Array(randomStar)].map((_, i) => {
                              return (
                                <img key={i} src={starRating} alt="star" />
                              );
                            })}
                          </div>
                        </div>
                        <div className={styles.priceAndWeight}>
                          <p>{each.totalWeight.toFixed(1)}g</p>
                          <p> {each.price}$</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Pagination length={selectedItems.length} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
