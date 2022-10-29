import { all } from 'redux-saga/effects';

import {
  loadProperties
} from './properties';

export default function* root() {
  yield all([
    loadProperties(),
  ]);
}
