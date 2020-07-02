import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/actions/actionTypes";
import { Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import "./ProductDetails.css";

export default function ProductDetails(props) {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProductReducer);
  const categories = useSelector((state) => state.categoryListReducer);

  const findCategory = () => {
    if (categories.length > 0) {
      const categoryArr = categories.filter(
        (item) => item.id === selectedProduct.categoryId
      );
      if (categoryArr.length > 0) {
        return categoryArr[0].categoryName;
      }
    }
  };

  useEffect(() => {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUESTED, payload: productId });
    dispatch({ type: actionTypes.GET_CATEGORIES_REQUESTED });
  }, []);

  const addToCart = (product) => {
    dispatch(cartActions.addToCart({ quantity: 1, product }));
    alertify.success(product.productName + " added to cart!");
  };

  const renderProductInfo = () => {
    return (
      <div className="content">
        <div className="product-info">
          <h2>{selectedProduct.productName}</h2>
          <h4>Category: {findCategory()}</h4>
          <h4>Quantity per unit: {selectedProduct.quantityPerUnit}</h4>
          <h4>Unit Price: {selectedProduct.unitPrice}</h4>
          <h4>Unit in Stock: {selectedProduct.unitsInStock}</h4>
        </div>
        <Button
          color="success"
          className="cart-btn"
          onClick={() => addToCart(selectedProduct)}
        >
          Add to Cart
        </Button>
      </div>
    );
  };
  return (
    <div>
      {findCategory() ? renderProductInfo() : <div className="text-center">loading...</div>}
    </div>
  );
}
