import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instant = axios.create({
  timeoutErrorMessage: "Error 404",
  timeout: 10000,
  headers: {
    "Edamam-Account-User": "myrestaurant123",
  },
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
        elm.recipe.price = Math.round(Math.random() * 45 + 5);
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
