import { takeLatest, call, put } from "redux-saga/effects";

import {
  loadPropertiesSuccess,
  loadPropertiesError,
} from "../../actions/properties/properties";

import Api from "../../../api";
import { Property } from "../../../types";

import { LOAD_PROPERTIES } from "../../constants";

// load properties saga
function* loadPropertiesWorker() {
  try {
    const result: Array<Property> = yield call(Api.getProperties);

    yield put(
      loadPropertiesSuccess({
        properties: result,
      })
    );
  } catch (error) {
    yield put(loadPropertiesError(error as Error));
  }
}

export function* loadProperties() {
  yield takeLatest(LOAD_PROPERTIES, loadPropertiesWorker);
}
// end of load properties saga
