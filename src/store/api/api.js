import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  notifyForError,
  notifyForSMth,
  notifyForUserNotFound,
} from "../../helpers/notifyUser";
import { ROUTES } from "../../Routes";

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
      notifyForSMth("Message was send Successfuly");
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
      await response.forEach((elm) => {
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

const localStorageUsers = axios.create({
  baseURL: "http://localhost:8000/users",
  timeout: 10000,
  timeoutErrorMessage: "Too much time for fetching data",
});

export const creatingUserData = createAsyncThunk(
  "registration/creatingUserData",
  (arg, { rejectWithValue }) => {
    try {
      localStorageUsers({ method: "POST", data: arg });
      notifyForSMth("Account Registered Successfuly");
      return "Success";
    } catch (error) {
      return rejectWithValue("Cant Add User to list, PLs try again later");
    }
  }
);

export const checkingUserExisting = createAsyncThunk(
  "login/checkingUserExisting",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await localStorageUsers({ method: "GET" }).then(
        (res) => res.data
      );
      const lastResult = await response.find(
        (elm) => elm.email === email && elm.password === password
      );

      if (lastResult) {
        localStorage.setItem("userInfo", JSON.stringify(lastResult));
        notifyForSMth("You Logged In");
        navigate(ROUTES.HOME);
        return true;
      } else {
        notifyForError("User not found");
        return false;
      }
    } catch (error) {
      return rejectWithValue("Error While Checking User");
    }
  }
);

export const addingReserveTable = createAsyncThunk(
  "reservation/addingReserveTable",
  async (obj, { rejectWithValue }) => {
    try {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const response = await localStorageUsers().then((res) => res.data);
      const findedUser = await response.find(
        (elm) => elm.id === userInfo.id && !elm.reservation
      );
      if (findedUser) {
        const reservation = {
          reservation: obj,
        };
        localStorageUsers({
          method: "PATCH",
          data: reservation,
          url: `/${findedUser["id"]}`,
        });
        return "Success";
      } else {
        notifyForError(
          "You have already had reservation, Go to Profile for concelation"
        );
        return false;
      }
    } catch (error) {
      return rejectWithValue("Error 404");
    }
  }
);
