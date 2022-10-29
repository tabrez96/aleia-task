import { combineReducers } from "redux";

import propertiesReducer from "./properties";

const createReducer = () =>
  combineReducers({
    properties: propertiesReducer,
  });

export default createReducer;
