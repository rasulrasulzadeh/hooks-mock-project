import * as actionTypes from "./actionTypes";
import { getProducts } from "./api";
import { call, put } from "redux-saga/effects";

export const getProductsSuccess = (products) => {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
};

export const getProductSuccess = (product) => {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: product };
};

export function* getProductsSaga(action) {
  let url = "http://localhost:3005/products";
  if (action.payload) {
    url = url + "?categoryId=" + action.payload.id;
  }
  try {
    const data = yield call(getProducts, url);
    yield put(getProductsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getProductSaga(action) {
  let url = "http://localhost:3005/products/" + action.payload;
  try {
    const data = yield call(getProducts, url);
    yield put(getProductSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
