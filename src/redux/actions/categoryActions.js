import * as actionTypes from "./actionTypes";
import {call, put } from "redux-saga/effects";
import {getCategories} from "./api";

export const changeCategory = (category) => {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
};

export const getCategoriesSuccess = data => {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: data }
}

export function* getCategoriesSaga(action) {
  try {
    const data = yield call(getCategories);
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    console.log(error)
  }
}

