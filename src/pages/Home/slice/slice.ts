import { createSlice, Dispatch } from "@reduxjs/toolkit";

import Api from "../../../api";
import { Property } from "../../../types";

export interface propertiesState {
  properties: Array<Property>;
  favorites: Array<number>;
  isLoadingProperties?: boolean;
  isLoadingFavorites?: boolean;
}

const initialState: propertiesState = {
  properties: [],
  favorites: [],
  isLoadingProperties: true,
  isLoadingFavorites: true,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
      state.isLoadingProperties = false;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      state.isLoadingFavorites = false;
    },
  },
});

export const loadProperties = () => async (dispatch: Dispatch) => {
  try {
    const response = await Api.getProperties();
    dispatch(setProperties(response));
  } catch (err) {
    throw new Error();
  }
};

export const loadFavorites = () => async (dispatch: Dispatch) => {
  try {
    const response = await Api.getFavorites();
    dispatch(setFavorites(response));
  } catch (err) {
    throw new Error();
  }
};

export const { setProperties, setFavorites } = homeSlice.actions;
