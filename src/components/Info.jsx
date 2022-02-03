import React, { useContext, useState } from "react";
import "./Info.scss";
import cart from "../images/icon-cart.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import store from "../store";
import { addToCart } from "../actions";

const Main = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div className="Main">
      <h4 className="Main__company">SNEAKER COMPANY</h4>
      <h1 className="Main__name">Fall Limited Edition Sneakers</h1>
      <p className="Main__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="Main__price">
        <h1 className="Main__price--sell">$125.00</h1>
        <span className="Main__price--actual">$250.00</span>
      </div>
      <div className="Main--foot">
        <div className="Main--foot__amount">
          <img
            onClick={() => {
              let value = Number(amount);
              if (value <= 0) return;
              setAmount(value - 1);
            }}
            src={minus}
            alt="minus"
            className="Main--foot__amount--minus"
          />
          <input
            className="Main--foot__amount--input"
            placeholder={0}
            value={amount}
            onChange={(e) => {
              let value = e.target.value;
              value = value === "00" ? "0" : value;
              setAmount(value);
            }}
            type="number"
            name="amount"
            id="amount"
          />
          <img
            onClick={() => {
              setAmount(Number(amount) + 1);
            }}
            src={plus}
            alt="plus"
            className="Main--foot__amount--plus"
          />
        </div>
        <button
          onClick={() => {
            store.dispatch(addToCart(amount));
          }}
          disabled={amount <= 0}
        >
          <img src={cart} alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Main;
