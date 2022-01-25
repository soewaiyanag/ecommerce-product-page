import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [numOfItem, setNumOfItem] = useState(0);
  return (
    <CartContext.Provider value={{ numOfItem, setNumOfItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
