import React from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { gettAllDataSearching } from "../../store/SearchSlice/SearchSlice";
import { searchHelper } from "../../helpers/searchHelper";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { nanoid } from "nanoid";
import { starRating } from "../../components/Images";
const Search = () => {
  const dispatch = useDispatch();
  const { foundedData } = useSelector(gettAllDataSearching);
console.log(foundedData.length);

  return (
    <section className={styles.searching}>
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <div className={styles.searchLine}>
            <FaSearch />
            <input
              type="text"
              placeholder="Search Meals..."
              onChange={(e) => {
                searchHelper(dispatch, e);
              }}
            />
          </div>
          <div className={styles.allMeals}>
            {foundedData.length > 1 ? (
              foundedData?.map((elm) => {
                const each = elm.recipe;
                let randomStar = Math.round(Math.random() * 2 + 3);
                let ingredients = each.ingredientLines.slice(0, 4);
                return (
                  <div key={nanoid(5)} className={styles.eachMenu}>
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
            ) : (
              <div className={styles.noMealFound}>
                <p className={styles.searchingIcon}>🔍</p>
                <p className={styles.searchingTitle}>No Results Found</p>
                <p className={styles.searchingMessage}>
                  Sorry, we couldn’t find any meals matching your search. Try
                  using different keywords, checking for types, or explore our
                  popular sections below!
                </p>
                <div className={styles.buttons}>
                  <Link to={`/${ROUTES.MENU}`}>Menu</Link>
                  <Link to={`/${ROUTES.RESERVATION}`}>Reservation</Link>
                  <Link to={`/${ROUTES.RESTAURANTS}`}>Our Restaurants</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
