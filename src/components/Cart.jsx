import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../CartContext";
import tumb from "../images/image-product-1-thumbnail.jpg";
import del_icon from "../images/icon-delete.svg";

const EmtpyCart = () => <div className="Cart__empty">Your cart is empty.</div>;

const Item = () => {
  const { numOfItem, setNumOfItem } = useContext(CartContext);

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
          setNumOfItem(0);
        }}
      />
    </div>
  );
};

const ItemCart = () => {
  return (
    <div className="ItemCart">
      <Item />
      <button className="ItemCart--checkoutBtn">Checkout</button>
    </div>
  );
};

const Cart = () => {
  const { numOfItem } = useContext(CartContext);
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
