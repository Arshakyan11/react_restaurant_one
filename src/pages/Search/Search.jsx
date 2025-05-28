import React from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { gettAllDataSearching } from "../../store/SearchSlice/SearchSlice";
import { searchHelper } from "../../helpers/searchHelper";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Search = () => {
  const dispatch = useDispatch();
  const { foundedData } = useSelector(gettAllDataSearching);
  console.log(foundedData);

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
          <div className={styles.noMealFound}>
            <p className={styles.searchingIcon}>🔍</p>
            <p className={styles.searchingTitle}>No Results Found</p>
            <p className={styles.searchingMessage}>
              Sorry, we couldn’t find any meals matching your search. Try using
              different keywords, checking for types, or explore our popular
              sections bellow!
            </p>
            <div className={styles.buttons}>
              <Link>Menu</Link>
              <Link>Reservation</Link>
              <Link>Our Restaurants</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
