export const addToCart = (amount) => {
  return {
    type: "ADD_TO_CART",
    amount,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
};
