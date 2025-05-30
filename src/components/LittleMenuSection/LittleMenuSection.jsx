import React, { useEffect } from "react";
import styles from "./LittleMenuSection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLittleMenu } from "../../store/api/api";
import {
  gettAllInfo,
  setActiveCategory,
} from "../../store/littleMenuSlice/littleMenuSlice";
import { starRating } from "../Images";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import {
  getAllPagination,
  setInfoAboutPagination,
} from "../../store/PaginationSlice/paginationSlice";

const LittleMenuSection = () => {
  const dispatch = useDispatch();
  const { data, loading, activeCategory } = useSelector(gettAllInfo);
  const { slicedData } = useSelector(getAllPagination);
  const categories = ["BBQ", "pizza", "sushi", "desserts top", "coffee drink"];
  const buttonNames = ["All Category", "Dinner", "Lunch", "Dessert", "Drink"];

  useEffect(() => {
    dispatch(fetchingLittleMenu("BBQ"));
    dispatch(setActiveCategory("BBQ"));
  }, []);

  useEffect(() => {
    dispatch(
      setInfoAboutPagination({
        data: data,
        postsPerPage: 6,
        currentPage: 1,
      })
    );
  }, [data]);

  const handleClick = (type) => {
    if (type !== activeCategory) {
      dispatch(fetchingLittleMenu(type));
      dispatch(setActiveCategory(type));
    }
  };
  return (
    <div className={styles.littleMenuSec}>
      <p className={styles.mainText}>Our popular Menu</p>
      <div className={styles.foodType}>
        {categories?.map((each, ind) => {
          return (
            <button
              key={ind}
              className={`${styles.button} ${
                activeCategory === each ? styles.activeBtn : ""
              }`}
              onClick={() => handleClick(each)}
            >
              {buttonNames[ind]}
            </button>
          );
        })}
      </div>
      <div className={styles.allMenu}>
        {loading ? (
          <div className={styles.allLoaders}>
            <div className={styles.firstLine}>
              <span className={styles.loader}></span>
              <span className={styles.loader}></span>
              <span className={styles.loader}></span>
            </div>
            <div className={styles.firstLine}>
              <span className={styles.loader2}>L &nbsp; ading</span>
            </div>
          </div>
        ) : (
          slicedData?.map((elm, index) => {
            const each = elm.recipe;
            let randomStar = Math.round(Math.random() * 2 + 3);
            let ingredients = each.ingredientLines.slice(0, 4);
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
          })
        )}
      </div>
      <Pagination length={data.length} />
    </div>
  );
};

export default LittleMenuSection;
