import * as actionTypes from "./actionTypes";
import {all, takeLatest } from "redux-saga/effects";
import { getCategoriesSaga } from "./categoryActions";
import {getProductsSaga, getProductSaga} from "./productActions"


export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_CATEGORIES_REQUESTED, getCategoriesSaga),
    takeLatest(actionTypes.GET_PRODUCTS_REQUESTED, getProductsSaga),
    takeLatest(actionTypes.GET_PRODUCT_REQUESTED, getProductSaga)
  ]);
}
