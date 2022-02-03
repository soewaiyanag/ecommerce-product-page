import React from "react";
import "./Cart.scss";
import Item from "./Item";
import store from "../store";

const EmtpyCart = () => <div className="Cart__empty">Your cart is empty.</div>;

const ItemCart = () => {
  return (
    <div className="ItemCart">
      <Item />
      <a href="https://youtu.be/dQw4w9WgXcQ" className="ItemCart--checkoutBtn">
        Checkout
      </a>
    </div>
  );
};

const Cart = () => {
  const { numOfItem } = store.getState();

  return (
    <div className="Cart">
      <h1 className="Cart__header">Cart</h1>
      <div className="Cart__main">
        {numOfItem ? <ItemCart /> : <EmtpyCart />}
      </div>
    </div>
  );
};

export default Cart;
