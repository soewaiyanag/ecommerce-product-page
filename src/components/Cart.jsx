import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="Cart">
      <h1 className="Cart__header">Cart</h1>
      <div className="Cart__main">
        <span className="Cart__empty">Your cart is empty.</span>
      </div>
    </div>
  );
};

export default Cart;
