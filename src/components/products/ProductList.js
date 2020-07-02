import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import * as actionTypes from "../../redux/actions/actionTypes";
import { Link } from "react-router-dom";

const ProductList = () => {
  const currentCategory = useSelector((state) => state.changeCategoryReducer);
  const products = useSelector((state) => state.productListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: actionTypes.GET_PRODUCTS_REQUESTED});
  }, []);

  const addToCart = (product) => {
    dispatch(cartActions.addToCart({ quantity: 1, product }));
    alertify.success(product.productName + " added to cart!");
  };
  return (
    <div>
      <h1>
        <span>
          {currentCategory.categoryName
            ? currentCategory.categoryName
            : "Products"}
        </span>
      </h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Qaantity per Unit</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td><Link to={`/products/${product.id}`}>{product.productName}</Link></td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button color="success" onClick={() => addToCart(product)}>
                  add
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
