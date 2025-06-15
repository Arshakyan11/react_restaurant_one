import React, { useEffect, useState } from "react";
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
const BuyingItemsList = () => {
  const dispatch = useDispatch();
  const { isHidenModal, loading } = useSelector(getAllMiniBuyingListInfo);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //   useEffect(() => {
  // dispatch(setModalOpenType(!isHidenModal))
  //   }, []);
  if (userInfo) {
    return (
      <div className="allItems">
        <div
          className="buyingList"
          onClick={() => dispatch(setModalOpenType(!isHidenModal))}
        >
          <FaCartShopping />
        </div>
        {isHidenModal ? (
          <div className="modalContainer">
            <div className="modal">
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
                              changingCountOfItem({ mealId: elm.id, type: -1 })
                            )
                          }
                        >
                          <FaMinus />
                        </p>
                        <p
                          onClick={() =>
                            dispatch(
                              changingCountOfItem({ mealId: elm.id, type: 1 })
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
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    <></>;
  }
};

export default BuyingItemsList;
