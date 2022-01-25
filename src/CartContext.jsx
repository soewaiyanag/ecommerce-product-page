import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [amount, setAmount] = useState(0);
  return (
    <CartContext.Provider value={{ amount, setAmount }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
