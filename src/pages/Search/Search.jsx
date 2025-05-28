import React from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" placeholder="Search Meals..."  onChange={""}/>
    </div>
  );
};

export default Search;
