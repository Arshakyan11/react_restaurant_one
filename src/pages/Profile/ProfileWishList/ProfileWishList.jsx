import React from "react";
import styles from "./ProfileWishList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getallWatchlistInfo } from "../../../store/WishlistSlice/WishlistSlice";
import { deleteWishListFromData } from "../../../store/api/api";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Routes";
import { FaBurger } from "react-icons/fa6";
import { burgerProfile } from "../../../components/Images";
const ProfileWishList = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { loading } = useSelector(getallWatchlistInfo);
  const dispatch = useDispatch();
  return (
    <div className={styles.wishListSec}>
      <div className={styles.mainWishListSec}>
        <div className={styles.wishedItems}>
          {userInfo.wishList.length > 0 ? (
            userInfo?.wishList?.map((elm, ind) => {
              return (
                <div className={styles.wishedItemEach} key={ind}>
                  <img src={elm.img} alt="img" className={styles.mealImg} />
                  <div className={styles.infoOfMeal}>
                    <h2>{elm.name}</h2>
                    <div className={styles.eachLine}>
                      <p>Price: </p>
                      <h2>{elm.price}$</h2>
                    </div>
                    <button
                      onClick={() => dispatch(deleteWishListFromData(elm.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.notFoundAnyItem}>
              <h2>Your wishlist is currently empty.</h2>
              <img src={burgerProfile} alt="burgerImg" />
              <h3>
                Start adding your favorite items to keep track of them here.
              </h3>
              <div className={styles.buttons}>
                <Link to={`/${ROUTES.MENU}`}>Check Menu</Link>
                <Link to={`/${ROUTES.Search}`}>Go to Search</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileWishList;
