import React, { useEffect, useRef, useState } from "react";
import "./BuyingItemsList.scss";
import { FaCartShopping } from "react-icons/fa6";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMiniBuyingListInfo,
  setModalOpenType,
} from "../../store/MiniBuyingListSlice/MiniBuyingListSlice";
import {
  changingCountOfItem,
  deleteWishListFromData,
} from "../../store/api/api";
import { getUserInfo } from "../../store/AuthSlice/AuthSlice";
const BuyingItemsList = () => {
  const dispatch = useDispatch();
  const { isOpenModal } = useSelector(getAllMiniBuyingListInfo);
  const { userInfo } = useSelector(getUserInfo);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isOpenModal
      ) {
        dispatch(setModalOpenType(false));
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenModal, dispatch]);

  useEffect(() => {
    dispatch(setModalOpenType(false));
  }, []);
  if (userInfo) {
    return (
      <div className="allItems">
        <div
          className="buyingList"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setModalOpenType(!isOpenModal));
          }}
        >
          <FaCartShopping />
        </div>
        {isOpenModal ? (
          <div className="modalContainer">
            <div className="modal" ref={modalRef}>
              {userInfo.wishList.length > 0 ? (
                <>
                  <div className="selectedItems">
                    {userInfo.wishList.map((elm, ind) => {
                      return (
                        <div className="eachItem" key={ind}>
                          <img src={elm.img} alt="" />
                          <div className="infoOfItem">
                            <p>{elm.name.slice(0, 30)}</p>
                            <p>{elm.price}$</p>
                            <div className="buttons">
                              <p
                                onClick={() =>
                                  dispatch(deleteWishListFromData(elm.id))
                                }
                              >
                                <FaTrash />
                              </p>
                              <p
                                onClick={() =>
                                  dispatch(
                                    changingCountOfItem({
                                      mealId: elm.id,
                                      type: -1,
                                    })
                                  )
                                }
                              >
                                <FaMinus />
                              </p>
                              <p
                                onClick={() =>
                                  dispatch(
                                    changingCountOfItem({
                                      mealId: elm.id,
                                      type: 1,
                                    })
                                  )
                                }
                              >
                                <FaPlus />
                              </p>
                              <p>{elm.count}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="buttons">
                    <button>Order Now</button>
                  </div>
                </>
              ) : (
                <h2>There is no any item yet!</h2>
              )}
              <div className="totalCount">
                <p>Total</p>
                <p>{userInfo.totalCheckPrice}$</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default BuyingItemsList;
