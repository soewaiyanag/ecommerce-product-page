const initialState = { numOfItem: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        numOfItem: state.numOfItem + action.amount,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        numOfItem: 0,
      };

    default:
      return state;
  }
};

export default reducer;
