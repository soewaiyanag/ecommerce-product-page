import React, { useState } from "react";
import "./Main.scss";
import cart from "../images/icon-cart.svg";

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
      <div className="Main__amount">
        <input
          className="Main__amount--input"
          value={amount}
          placeholder={0}
          onChange={(e) => {
            let value = Number(e.target.value);
            value = value === 0 ? "" : value;
            setAmount(value);
          }}
          type="number"
          name="amount"
          id="amount"
        />
        <button className="Main__amount--btn">
          <img src={cart} alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Main;
