import React from "react";
import "./Cart.scss";

const EmtpyCart = () => (
  <span className="Cart__empty">Your cart is empty.</span>
);

const Cart = () => {
  return (
    <div className="Cart">
      <h1 className="Cart__header">Cart</h1>
      <div className="Cart__main">
        <EmtpyCart />
      </div>
    </div>
  );
};

export default Cart;
