import React from "react";
import tumb from "../images/image-product-1-thumbnail.jpg";
import del_icon from "../images/icon-delete.svg";
import store from "../store";
import { removeFromCart } from "../actions";

const Item = () => {
  const { numOfItem } = store.getState();

  const price = 125;
  return (
    <div className="Item">
      <img className="Item--img" src={tumb} alt="tumb" />
      <span className="Item__name">Autumn Limited Edition</span>
      <span className="Item__price">
        ${price.toFixed(2)} × {numOfItem}{" "}
        <span className="Item__price__total">
          ${(price * numOfItem).toFixed(2)}
        </span>
      </span>
      <img
        className="Item__del"
        src={del_icon}
        alt="delete icon"
        onClick={() => {
          store.dispatch(removeFromCart());
        }}
      />
    </div>
  );
};

export default Item;
