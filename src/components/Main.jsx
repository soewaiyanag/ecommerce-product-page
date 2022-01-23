import React, { useState } from "react";
import "./Main.scss";
import cart from "../images/icon-cart.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

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
        <div className="Main__amount">
          <img
            onClick={() => {
              let value = Number(amount);
              if (value <= 0) return;
              setAmount(value - 1);
            }}
            src={minus}
            alt="minus"
            className="Main__amount--minus"
          />
          <input
            className="Main__amount--input"
            placeholder={0}
            min={0}
            max={999}
            maxLength={4}
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
            className="Main__amount--plus"
          />
        </div>
        <button>
          <img src={cart} alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Main;
