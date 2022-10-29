import {
  LOAD_FAVORITES,
  LOAD_FAVORITES_ERROR,
  LOAD_FAVORITES_SUCCESS,
  LOAD_PROPERTIES,
  LOAD_PROPERTIES_ERROR,
  LOAD_PROPERTIES_SUCCESS,
} from "../../constants";

import { loadPropertiesPayload, loadFavoritesPayload } from "./types";

export const loadProperties = () => {
  return {
    type: LOAD_PROPERTIES,
  };
};

export const loadPropertiesSuccess = (payload: loadPropertiesPayload) => {
  return {
    type: LOAD_PROPERTIES_SUCCESS,
    payload,
  };
};

export const loadPropertiesError = (error: Error) => {
  return {
    type: LOAD_PROPERTIES_ERROR,
    error,
  };
};

export const loadFavorites = () => {
  return {
    type: LOAD_FAVORITES,
  };
};

export const loadFavoritesSuccess = (payload: loadFavoritesPayload) => {
  return {
    type: LOAD_FAVORITES_SUCCESS,
  };
};

export const loadFavoritesError = (error: Error) => {
  return {
    type: LOAD_FAVORITES_ERROR,
    error,
  };
};
