import React from "react";
import styles from "./EachProduct.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { FaCartShopping } from "react-icons/fa6";
const EachProduct = () => {
  const { data } = useLocation().state;
  const mealObj = data.recipe;
  console.log(mealObj);

  return (
    <section className={styles.eachMealSec}>
      <div className={styles.container}>
        <div className={styles.eachProduct}>
          <div className={styles.leftSection}>
            <img src={mealObj.images?.REGULAR.url} alt="mealImg" />
            <div className={styles.infoSecMiddle}>
              <p className={styles.ingredientsTitle}>Ingredients:</p>
              <div className={styles.ingredients}>
                {mealObj.ingredients.map((elm, i) => {
                  return <p key={i}>{elm.food}, </p>;
                })}
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.infoSecMiddle}>
              <p>Name:</p>
              <p>{mealObj.label}</p>
            </div>
            <div className={styles.infoSecMiddle}>
              <p>mealType:</p>
              <p>{mealObj.mealType[0]}</p>
            </div>
            <div className={styles.infoSecMiddle}>
              <p>Price:</p>
              <p>{mealObj.price}$</p>
            </div>
            <div className={styles.infoSecMiddle}>
              <p>Calories:</p>
              <p>{mealObj.calories.toFixed(1)}kcal</p>
            </div>
            <div className={styles.infoSecMiddle}>
              <p>Cuisine:</p>
              <p>{mealObj.cuisineType}</p>
            </div>
            <div className={styles.infoSecMiddle}>
              <p>dietLabels:</p>
              <p>{mealObj.dietLabels}</p>
            </div>
            <div className={styles.infoSecMiddle}>
              <p>Weight:</p>
              <p>{mealObj.totalWeight.toFixed(1)}g</p>
            </div>
            <div className={styles.buttons}>
              <Link to={`/${ROUTES.MENU}`}>Go To Menu</Link>
              <button>
                Add to Order <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EachProduct;
