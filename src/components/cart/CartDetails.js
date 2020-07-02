import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button, Badge } from "reactstrap";
import alertify from "alertifyjs";

const CartDetails = () => {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  function removeFromCart(product) {
    dispatch(cartActions.removeFromCart(product));
    alertify.error(product.productName + " removed from the cart!");
  }

  function renderEmpty() {
    return <h1>YOUR CART IS EMPTY!</h1>;
  }

  function renderCartContent() {
    return (
      <div>
        <h1>
          <Badge color="info">Your Cart</Badge>
        </h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => removeFromCart(cartItem.product)}
                  >
                    remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  return <div>{cart.length > 0 ? renderCartContent() : renderEmpty()}</div>;
};

export default CartDetails;
