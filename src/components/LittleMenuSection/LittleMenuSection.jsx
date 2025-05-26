import React, { useEffect } from "react";
import styles from "./LittleMenuSection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLittleMenu } from "../../store/api/api";
import { gettAllInfo } from "../../store/littleMenuSlice/littleMenuSlice";
import { starRating } from "../Images";
import { Link } from "react-router-dom";
const LittleMenuSection = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(gettAllInfo);
  console.log(data);

  useEffect(() => {
    dispatch(fetchingLittleMenu("BBQ"));
  }, []);
  return (
    <div className={styles.littleMenuSec}>
      <p className={styles.mainText}>Our popular Menu</p>
      <div className={styles.foodType}>
        <button autoFocus onClick={() => dispatch(fetchingLittleMenu("BBQ"))}>
          All Category
        </button>
        <button onClick={() => dispatch(fetchingLittleMenu("pizza"))}>
          Dinner
        </button>
        <button onClick={() => dispatch(fetchingLittleMenu("sushi"))}>
          Lunch
        </button>
        <button onClick={() => dispatch(fetchingLittleMenu("desserts top"))}>
          Dessert
        </button>
        <button onClick={() => dispatch(fetchingLittleMenu("coffee drink"))}>
          Drink
        </button>
      </div>
      <div className={styles.allMenu}>
        {/* {loading ? (
          <div className={styles.allLoaders}>
            <span className={styles.loader}></span>
            <span className={styles.loader}></span>
            <span className={styles.loader}></span>
          </div> */}
        {/* // ) : ( */}
        {data?.map((elm, index) => {
          const each = elm.recipe;
          let randomStar = Math.round(Math.random() * 2 + 3);
          let ingredients = each.ingredientLines.slice(0, 4);
          return (
            <div key={index} className={styles.eachMenu}>
              <img src={each.images?.REGULAR.url} alt="" />
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
        {/* )} */}
      </div>
    </div>
  );
};

export default LittleMenuSection;
