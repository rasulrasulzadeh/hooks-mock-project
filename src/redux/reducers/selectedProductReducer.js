import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

const selectedProductReducer = (state = initialState.selectedProduct, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export default selectedProductReducer