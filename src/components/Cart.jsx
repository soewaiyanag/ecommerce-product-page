import React from "react";
import "./Cart.scss";
import Item from "./Item";
import store from "../store";

const EmtpyCart = () => <div className="Cart__empty">Your cart is empty.</div>;

const ItemCart = () => {
  const { items } = store.getState();
  return (
    <div className="ItemCart">
      <div className="ItemCart__container">
        {items.map((item) => (
          <Item amount={item.amount} id={item.id} key={item.id} />
        ))}
      </div>
      <a href="https://youtu.be/dQw4w9WgXcQ" className="ItemCart--checkoutBtn">
        Checkout
      </a>
    </div>
  );
};

const Cart = () => {
  const { items } = store.getState();

  return (
    <div className="Cart">
      <h1 className="Cart__header">Cart</h1>
      <div className="Cart__main">
        {!!items.length ? <ItemCart /> : <EmtpyCart />}
      </div>
    </div>
  );
};

export default Cart;
