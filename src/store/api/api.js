import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notifyForConnecting } from "../../helpers/notifyUser";

const instant = axios.create({
  timeoutErrorMessage: "Error 404",
  timeout: 10000,
  headers: {
    "Edamam-Account-User": "myrestaurant123",
  },
});

const localStorageContacts = axios.create({
  timeoutErrorMessage: "Error 404",
  timeout: 10000,
  baseURL: "http://localhost:8000/usersMessage",
});

export const fetchingLittleMenu = createAsyncThunk(
  "littleMenu/fetchingLittleMenu",
  async (query, { rejectWithValue }) => {
    try {
      const response = await instant({
        method: "GET",
        baseURL: `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&diet=balanced&app_id=${process.env.REACT_APP_FOODS_API_ID}&app_key=${process.env.REACT_APP_FOODS_API_KEY}`,
      }).then((res) => res.data.hits);
      if (response.length > 16) {
        response.length = 12;
      }
      response.forEach((elm) => {
        elm.recipe.price = Math.round(Math.random() * 55 + 2);
        delete elm.recipe.digest;
        delete elm.recipe.healthLabels;
        delete elm.recipe.totalCO2Emissions;
        delete elm.recipe.totalNutrients;
        delete elm.recipe.totalDaily;
        delete elm.recipe.url;
        delete elm.recipe.uri;
        delete elm.recipe.dietLabels;
      });
      return response;
    } catch (error) {
      return rejectWithValue("Error 404");
    }
  }
);

export const sendingMessage = createAsyncThunk(
  "ContactUsSlice/sendingMessage",
  async (data, { rejectWithValue }) => {
    try {
      localStorageContacts({ method: "POST", data: data });
      notifyForConnecting();
      return "Success";
    } catch (error) {
      return rejectWithValue("Smth Went Wrong!");
    }
  }
);

export const fetchingSearchMenu = createAsyncThunk(
  "searching/fetchingSearchMenu",
  async (query, { rejectWithValue }) => {
    try {
      const response = await instant({
        method: "GET",
        baseURL: `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&diet=balanced&app_id=${process.env.REACT_APP_FOODS_API_ID}&app_key=${process.env.REACT_APP_FOODS_API_KEY}`,
      }).then((res) => res.data.hits);
      response.forEach((elm) => {
        elm.recipe.price = Math.round(Math.random() * 55 + 2);
      });
      return { queryName: query, data: response };
    } catch (error) {
      return rejectWithValue("Error 404");
    }
  }
);

export const fetchingGlobalMenu = createAsyncThunk(
  "menu/fetchingGlobalMenu",
  async (query, { rejectWithValue }) => {
    try {
      const response = await instant({
        method: "GET",
        baseURL: `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&diet=balanced&app_id=${process.env.REACT_APP_FOODS_API_ID}&app_key=${process.env.REACT_APP_FOODS_API_KEY}`,
      }).then((res) => res.data.hits);
      response.forEach((elm) => {
        let randomStar = Math.round(Math.random() * 2 + 3);
        elm.recipe.price = Math.round(Math.random() * 55 + 2);
        elm.recipe.starCount = [...Array(randomStar)];
      });
      return { response, query };
    } catch (error) {
      return rejectWithValue("Error 404 while getting Result");
    }
  }
);
