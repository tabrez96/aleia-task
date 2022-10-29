import {
  LOAD_PROPERTIES,
  LOAD_PROPERTIES_ERROR,
  LOAD_PROPERTIES_SUCCESS,
  LOAD_FAVORITES,
  LOAD_FAVORITES_ERROR,
  LOAD_FAVORITES_SUCCESS,
} from "../../constants";

const initialState = {
  properties: [],
  favorites: [],
};

export default function propertiesReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return {
        ...state,
        loadingProperties: true,
      };

    case LOAD_PROPERTIES_SUCCESS:
      return {
        ...state,
        loadingProperties: false,
        properties: action.payload.properties,
      };

    case LOAD_PROPERTIES_ERROR:
      return {
        ...state,
        loadingPropertiesError: true,
        loadingProperties: false,
      };

    case LOAD_FAVORITES:
      return {
        ...state,
        loadingFavorites: true,
      };

    case LOAD_FAVORITES_SUCCESS:
      return {
        ...state,
        loadingFavorites: false,
        properties: action.payload.properties,
      };

    case LOAD_FAVORITES_ERROR:
      return {
        ...state,
        loadingFavoritesError: true,
        loadingFavorites: false,
      };
  }
}
