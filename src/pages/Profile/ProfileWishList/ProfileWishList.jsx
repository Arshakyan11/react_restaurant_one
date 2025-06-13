import React from "react";
import styles from "./ProfileWishList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getallWatchlistInfo } from "../../../store/WishlistSlice/WishlistSlice";
import { deleteWishListFromData } from "../../../store/api/api";
const ProfileWishList = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { loading } = useSelector(getallWatchlistInfo);
  const dispatch = useDispatch();
  return (
    <div className={styles.wishListSec}>
      <div className={styles.mainWishListSec}>
        <div className={styles.wishedItems}>
          {userInfo?.wishList?.map((elm, ind) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileWishList;
